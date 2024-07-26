UPDATE wp_hollywoodcom.wp_term_taxonomy AS tt
INNER JOIN (
    SELECT t.term_id
    FROM wp_hollywoodcom.wp_terms AS t
    INNER JOIN wp_hollywoodcom.wp_term_taxonomy AS tt ON t.term_id = tt.term_id
    LEFT JOIN wp_hollywoodcom.wp_term_relationships AS tr ON tr.term_taxonomy_id = tt.term_taxonomy_id
    WHERE tt.taxonomy = 'post_tag'
    GROUP BY t.term_id
    HAVING COUNT(tr.object_id) = 0
) AS tags_to_disable ON tags_to_disable.term_id = tt.term_id
SET tt.taxonomy = 'disabled_tag'
WHERE tt.taxonomy = 'post_tag';


SELECT t.term_id, t.name, tt.taxonomy 
FROM wp_hollywoodcom.wp_terms AS t
INNER JOIN wp_hollywoodcom.wp_term_taxonomy AS tt ON t.term_id = tt.term_id
LEFT JOIN wp_hollywoodcom.wp_term_relationships AS tr ON tr.term_taxonomy_id = tt.term_taxonomy_id
WHERE tt.taxonomy = 'post_tag'
GROUP BY t.term_id, t.name, tt.taxonomy
HAVING COUNT(tr.object_id) = 0;

SELECT t.term_id, t.name, tt.taxonomy, t.slug, COUNT(tr.object_id) AS post_count,COUNT(p.ID)
FROM wp_hollywoodcom.wp_terms AS t
INNER JOIN wp_hollywoodcom.wp_term_taxonomy AS tt ON t.term_id = tt.term_id
LEFT JOIN wp_hollywoodcom.wp_term_relationships AS tr ON tr.term_taxonomy_id = tt.term_taxonomy_id
LEFT JOIN wp_hollywoodcom.wp_posts AS p ON tr.object_id = p.ID AND p.post_status = 'publish'
WHERE tt.taxonomy = 'disabled_tag'
GROUP BY t.term_id, t.name, tt.taxonomy, t.slug

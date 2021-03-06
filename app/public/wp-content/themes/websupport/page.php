<?php
/**
 * Default page template
 * Author     : John Galyon
 * Author URI : https://www.covenanthealth.com
 * Created    : October 31, 2017
 * @version 2.0.0
 * @package WordPress
 * @subpackage covenant
 */

get_header(); if( have_posts() ) : while( have_posts() ) : the_post(); ?>

	<main class="container">
		<?php get_template_part( 'views/content', 'headings' ); ?>
		<div class="row post-content">
			<?php get_template_part( 'views/content', 'article'); ?>
		</div>
	</main>

<?php endwhile; endif; get_footer(); ?>

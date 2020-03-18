<?php
/**
 * Front Page Template
 * Author     : John Galyon
 * Author URI : https://www.covenanthealth.com
 * Created    : March 17, 2020
 * @version 2.0.0
 * @package WordPress
 * @subpackage covenant
 */

get_header(); if( have_posts() ) : while( have_posts() ) : the_post(); ?>

	<main class="container">
		<?php get_template_part( 'views/content', 'headings' ); ?>
		<div class="row post-content">
			<article <?php post_class('col-md-6 pull-right'); ?>>
				<?php the_content(); ?>
			</article>
			<aside class="col-md-6 pull-left">
				<?php echo do_shortcode('[gravityform id="1" title="false" description="false"]'); ?>
			</aside>
		</div>
	</main>

<?php endwhile; endif; get_footer(); ?>

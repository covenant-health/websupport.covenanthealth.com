<?php
/**
 * Header template
 * Author     : John Galyon
 * Author URI : https://www.covenanthealth.com
 * Created    : October 30, 2017
 * @version 2.0.0
 * @package WordPress
 * @subpackage covenant
 */
?>

<!DOCTYPE html>
<html class="no-js" lang="<?php echo get_bloginfo( 'language' ); ?>">
<head>
	<meta charset="<?php echo get_bloginfo( 'charset' ); ?>">

	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#00549f">

	<link rel="apple-touch-icon" href="<?php echo trailingslashit( get_stylesheet_directory_uri() ); ?>img/apple-touch-icon.png">

	<link rel="shortcut icon" href="<?php echo trailingslashit( get_stylesheet_directory_uri() ); ?>favicon.png" type="image/x-icon">

	<script src="<?php echo trailingslashit( get_stylesheet_directory_uri() ); ?>modernizr.js"></script>

	<?php wp_head(); ?>
</head>
<body>
	<div class="wrapper">

	</div>
	<footer>

	</footer>
</body>
</html>

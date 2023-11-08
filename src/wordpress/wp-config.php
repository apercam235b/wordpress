<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hF*lA~JAq<.4r6yuXLL9VJkansm7xhR6]wbA^_)CY|v%q_POo#<w,Fw{Jo%naLzH' );
define( 'SECURE_AUTH_KEY',  '017*Yz)8d6J)$LSQ.dePRsUfQvH6U9=BAPLV*v?{v db+1dfh:tc59-,G>b&dP|q' );
define( 'LOGGED_IN_KEY',    'F0I6iP_G9GYX9>{v_6-FggWmNU^$PA`FWN?J,_eSDhF;?lGFcnYf>]3F$.pxXX6$' );
define( 'NONCE_KEY',        'W/KdRVin5tr(JJIwgq}%?RlFS`Ph%nqSx!=kG^F.gq8g@3sAd?Yiog`-t;LLa?}Y' );
define( 'AUTH_SALT',        'SZKkDj(;?H#-YYEH<kbU=0X,@N)}q;rl7[i$9dHgjECtp$Lkl8yH<c!vkZb~m~Xf' );
define( 'SECURE_AUTH_SALT', '<DnU!wv`V_9@%nk^-yEd0lLaj%s%nIEKl0-lgbX9r=q,G~_BD5.@:?N@8!-w<=UW' );
define( 'LOGGED_IN_SALT',   '<lWB?^^?Y[a_ZZ#v<eO]C2G[0!)F-uZa`3zRbqmRy(A`&VbgI<X[qhlDj*:gr%(w' );
define( 'NONCE_SALT',       '5Maw<~~g_x`,u@}#vSB? 3Z`yBp_Y-q )LPsMj<~$S)%8V{pD^>&P?.nnswCJna!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

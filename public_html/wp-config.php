<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i3963630_wp1');

/** MySQL database username */
define('DB_USER', 'i3963630_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'J#OtVNI*uVDNj~bbLa~33.^7');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6l8j3d9OXQbLtBlIDOXKcMylKiSU8bjRiWfkxyHHk8zwp2IvLeexMskJrZUrBPL3');
define('SECURE_AUTH_KEY',  '3momkeBtirjdJLzjsyNjOH68wcSzns6sttjKprWb1tFiflhyJX0C4ydGDa70BJ2f');
define('LOGGED_IN_KEY',    'adHcg8rLWRUCnKXqVgOPIoHXU27atG3URf8ySwXU4HxaO4oCDKfOV7whbg4Soc3r');
define('NONCE_KEY',        'KbKEgjAQ00vzfzAQVdRDlv4sJ0KWfTQihB6b1isqmOD5fPTszc4zN3BeCY2bkK2i');
define('AUTH_SALT',        'AkIpUXhpiOjChlSXPpWRdML5XHvQRqLcXYUxIa7cy3ajQUumZFtzD7NsB9gdpMcY');
define('SECURE_AUTH_SALT', 'oRCQ89VztvbCMxCQEClsLqnuFiN6m11sxlyLHDXS9A8XvklacLxdMBF0vfsFHMRK');
define('LOGGED_IN_SALT',   'fiVQOCZgoH9YmTCv4phMIXPLTzZXS9oQNeTY1OHkjS8JDMrmYyNP5VlDcxKnumxv');
define('NONCE_SALT',       '1j2DZrWy9UCdTIEz59GwKPtQ66X1r8SyRLieLvM0TlA349j8ihRlv5U9MCW7Jvdh');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

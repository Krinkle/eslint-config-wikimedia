( function ( global ) {
	// eslint-disable-next-line no-useless-computed-key
	const foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line arrow-parens, no-constant-condition, no-unused-vars
	if ( a => 2 ) {
		global.foo( foo );
	}

	// eslint-disable-next-line no-new-require, new-cap
	global.bar = new require( 'events' );

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

	// eslint-disable-next-line prefer-const, no-buffer-constructor
	let b = new Buffer( 1 );
	const f = ( p ) => p;
	f( b );

	// eslint-disable-next-line no-useless-concat, no-unused-expressions
	'a' + 'b';

	// eslint-disable-next-line template-curly-spacing, no-unused-expressions
	`${ global.foo }`;

	// not-es6
	// eslint-disable-next-line no-restricted-syntax
	[].includes();

	// not-es2016
	// eslint-disable-next-line no-restricted-properties
	''.padStart();

	// not-es2017
	// eslint-disable-next-line no-restricted-properties
	''.trimEnd();

}( this ) );

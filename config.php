<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}

return [
    'js' => [
        './dist/reports.bundle.js',
    ],
    'css' => [
        './dist/reports.bundle.css',
    ],
    'rel' => [
		'main.core',
		'ui.vue3',
		'ui.ears',
		'ui.vue3.pinia',
	],
    'skip_core' => false,
];
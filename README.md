# DOM Based Templating Systems


This repo contains examples of html tables and lists rendered with several templating systems. The lists and tables are populated with data from JavaScript objects in <a href='data.js'>data.js</a>.

This is part of a comparison of some DOM based templating systems; background motivations, together with links to the templating systems' project pages, can be found <a href='https://www.mediawiki.org/wiki/Parsoid/Round-trip_testing/Templates'>here</a>.

## Notes

### Distal
Distal is a <a href='http://en.wikipedia.org/wiki/Template_Attribute_Language'>Template Attribute Language</a> (TAL). Unlike Pure, Transparency and Weld, Distal uses its own syntax to add attributes to HTML.

To bind data, mark HTML with TAL attributes and execute the distal function with two arguments -- the HTML element, and the JSON data. See examples of a <a href='distal/list.html'>list</a> and a <a href='distal/table.html'>table</a>.

JSTAL is another Template Attribute Language (it seems(?) to be similar to Distal, but less maintained/documented).


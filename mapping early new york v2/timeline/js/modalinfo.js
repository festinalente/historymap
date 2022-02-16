var modal_header_text = [];
var modal_content_html = [];

modal_header_text["about"] = "ABOUT";

			modal_content_html["about"] = `

			New York City was founded by the Dutch in 1624 as <i>New Amsterdam</i>, a trading post for the Dutch West India Company in New Netherland. The New Amsterdam History Center is devoted to documenting and mapping New Amsterdam, its diverse people, landscapes, institutions, and global legacy today.
			<p>
			We’ve presented several versions of the <i>Castello Plan</i>, the <i>Dutch Grants Map</i>, and other maps here.  You can see the settlement of houses, farms, taverns, and workshops, surrounded by walls.   Over the centuries that followed, the area became the Financial District.   The east wall was torn down and named Wall Street.   The canals were paved over became streets, and in between developed skyscrapers, while the island was expanded with infill.   Above ground, almost nothing remains of New Amsterdam except the original street pattern.   Underground, archeologists have found evidence of the plots of houses and gardens, Amsterdam yellow brick, and pollen samples of plants.
			<p>
			You can swipe the map to compare the Castello Plan in 1660 to the present, explore each lot, and use our encyclopedia to learn who lived there, how they earned a living, and in many cases, who they married.   
			<p>
			Our next steps will be to expand the maps to include all of Long Island and eventually the Hudson Valley, Connecticut and New Jersey, and to add more detail to the timeline to through 1664 when New Amsterdam was taken over by the English.
			<p>
			We need your help to make this work happen!   Donate now to develop the map and expand the research.
			<p>

			<br>
				<b><a href="http://newamsterdamhistorycenter.org/support/">Support Us</a></b>
				<p style="color: #b0691d; font-size: 16px; font-weight: bold;">
					<i>MAPPING EARLY NEW YORK</i> is made possible by grants from:<br>
					The SOCIETY OF THE DAUGHTERS OF HOLLAND DAMES<br>
					KEN CHASE<br>
					THE SOCIETY OF THE FIRST FAMILIES OF NEW YORK<br>
					THE ROBERT DAVID LION GARDINER FOUNDATION </b>

			<br>
			<br>
				<img src="https://nahc-mapping.org/mappingNY/encyclopedia/sites/default/files/gar-logo.jpg" width="96">
				<img src="https://nahc-mapping.org/mappingNY/encyclopedia/sites/default/files/first_families_logo.png" width="96">
				<img src="https://nahc-mapping.org/mappingNY/encyclopedia/sites/default/files/dohd_logo.png" width="96">


			<p>
			<br>
			<b>Creative Contributors:</b>
			<br>
			Toya Dubin, Project Manager, info@newamsterdamhistorycenter.org
			<br>
			Nitin Gadia, Mapping Director and Database Development
			<br>
			Jerry O’Toole, Database Assistant
			<br>
			Firth Haring Fabend, PhD.,  Head of Scholarly Research
			<br>
			Esme Berg, Executive Director
			`;
		
modal_header_text["info"] = modal_header_text["about"];
modal_content_html["info"] = modal_content_html["about"];

modal_header_text["grants-info-layer"] = "The Dutch Grants";
modal_content_html["grants-info-layer"] = `
<!--
            <i class="fa fa-square" style="color: #e3ed58;" ></i> Dutch Grants
            <br>
			<i class="far fa-square" style="color: #e3ed58;" ></i> Dutch Grants Lines
			<br>
			<p>
-->

			The Dutch Grants were the first properties that the Dutch West India Company awarded to many of the residents of New Amsterdam. Slide the timeline beneath to see how they were granted over time, from 1640 to 1664. Hover over them to see who owned the grant, when it was granted, and click for a description and a link to the encyclopedia.
			<p>
			<br>
			The grants were traced from the Dutch Grants map in The Iconography of Manhattan Island, where they were drawn using property descriptions. You can see the Dutch Grants map overlay beneath: “Dutch Grants, Stokes 1914-1916”.
			<p>
			<br>
			This layer only shows the grants as they were first established, not as they were divided or sold. For example, if a grant was made in 1640, in 1641 it may have been divided, with different owners, but you will still see it as it was when it was granted, across the whole timeline. Only one Dutch Grant, C7,  has been divided to show its evolution over the whole Dutch period - See the map layer: “Demo Grant Divisions: C7”.  Future funding will allow us to show all of them this way.
			<p>
			<br>
			 `;

modal_header_text["farms-info-layer"] = "Original Grants & Farms";
modal_content_html["farms-info-layer"] = `


			The Original Grants and the Farms Layer

			<br>
			 `;
			
modal_header_text["castello-info-layer"] = "Castello Taxlots Layer";
modal_content_html["castello-info-layer"] = `
<!--
            <i class="fa fa-circle"  style="color: #FF0000;" ></i>  Castello Taxlots (1660)
-->

			The Castello Taxlots (1660) shows residents and owners of properties in 1660, when the Castello Plan was drawn. The information was gathered from Stokes’ Iconography of Manhattan Island, where each of the lots in the Castello Plan illustration was assigned a “taxlot number”, and historic information was given for each.
			<p>
			<br>
			Click on the dots to see some information for each taxlot, with a link to the encyclopedia, where you can see who lived there, the property type, and the description from Stokes’ Iconography along with additions from many other resources.
			<p>
			<br>
			Use in conjunction with the Castello Plan map overlays, and click their info buttons to learn more about the Castello Plan.
			<p>
			<br>
			`;

modal_header_text["current-lots-info-layer"] = "Current Lots Layer";
modal_content_html["current-lots-info-layer"] = `
<!--
            <i class="fa fa-square" style="color: #7B68EE;" ></i> Current Lots
			<br>
			<i class="far fa-square" style="color: #000080;"></i> Current Lots Lines
-->

			These are the current lots in the area (2021), that cover the other layers and map overlays. Hover over the features and see the current owners, and click for more information, such as the lot number.
			<p>
			<br>
			To use this layer, compare it with others by clicking them on and off. For example, turn the Current Lots layer group on, and turn the Dutch Grants layers on and off repeatedly to compare, and do the same in reverse - keep the Dutch Grants on and turn the Current Lots on and off repeatedly, so the differences can be seen. Hover over features as well to see how lot lines cross.
			<p>
			<br>
			`;
			

			
modal_header_text["current-buildings-lines-info-layer"] = "Current Buildings Layer";
modal_content_html["current-buildings-lines-info-layer"] = `
<!--
            <i class="far fa-square" style="color: #FF0000;"></i> Current Buildings Lines
-->
			These are the current building outlines - they often match up with the lot lines, but sometimes there are multiple buildings within a lot or buildings that cover multiple lots.
            `;

modal_header_text["demo-taxlot-info-layer"] = "Demo Taxlot Layer";
modal_content_html["demo-taxlot-info-layer"] = `
<!--
            <i class="fa fa-play-circle"  style="color: #097911;" ></i> Demo Taxlot: C7
-->


			In this layer is a single large dot over a Castello Plan lot. Click on the dot and move the timeline on the bottom, and you’ll see people who owned or lived there over the history of the Dutch Period in the sidebar. Each time an event happens, the dot color changes blue or green. The information is from the Castello Plan section of Stokes’ Iconography of Manhattan Island. Each taxlot was given a number, and taxlot C7 was chosen for our demo. 
			<p>
			<br>
			Use this layer in conjunction with the Castello Plan map overlays on the bottom.
			<p>
			<br>
			For more information, see the “Castello Taxlots” map overlay.
			`;


modal_header_text["demo-grant-info-layer"] = "Demo Grant Divisions Layer";
modal_content_html["demo-grant-info-layer"] = `
<!--
            <i class="fa fa-square" style="color: #008888;" ></i> Demo Grant Divisions: C7
-->

			In this layer one Dutch Grant was taken and divided using property transfer descriptions, with owners added. Lots were subdivided and changed hands between multiple people. Slide the timeline and see the divisions happen and in between, hover or click the properties. Click on them for more information, such as the property description.
			<p>
			<br>
			Use the “Dutch Grants” layer for more context.
			<p>
			<br>
            `;



modal_header_text["castello-redrawn-plan"] = "Castello Redrawn 1913 (Default)";
modal_content_html["castello-redrawn-plan"] = `
			This is a colored draft of the Castello Plan, created in 1913 by John Wolcott Adams, and by Isaac Newton Phelps Stokes, who covered it extensively in Volume 2 of the Iconography of Manhattan Island.
			<p>
			<br>
			The Castello Plan was an illustrated map of New Amsterdam in 1660, created by Jacques Cortelyou. It was rediscovered in the Villa di Castello near Florence, Italy in 1900, and was printed in 1916. See other map overlays of versions of the Castello Plan from Stokes.
			<p>
			<br>
            `;



modal_header_text["original-castello-plan"] = "Original Castello Plan 1660";
modal_content_html["original-castello-plan"] = `
			This is the original copy of the Castello Plan, an illustrated map created in 1660 by Jacques Cortelyou. The copy was created by a draftsman between 1665-1670, from the lost original. Around 1667, cartographer Joan Blaeu brought the map to Europe and it was sold to Cosimo III de' Medici, Grand Duke of Tuscany. It was rediscovered in the Villa di Castello near Florence, Italy in 1900 and was printed in 1916. Today it is on display at the New York Public Library.
			<p>
			<br>
			Many drafts and illustrations were made of the Castello Plan, including by I.N. Phelps Stokes, who had depictions made and documented heavily in the Iconography of Manhattan Island. See other map overlays of versions of the Castello Plan from Stokes.
			<p>
			<br>
            `;


modal_header_text["stokes-key-castello"] = "Stokes Key to the Castello Plan 1912";
modal_content_html["stokes-key-castello"] = `
			This map is a key to the lots numbered in the Iconography of Manhattan Island of the Castello Plan (1660). For more information on the Castello Plan, click on the info button for the Original Castello Plan map overlay.
            `;
			
modal_header_text["new-amsterdam-legend"] = "Legend of New Amsterdam";
modal_content_html["new-amsterdam-legend"] = `
			This illustration of the Castello Plan shows the lot numbers in Stokes’ Key to the Castello Plan, along with what look like garden or lot lines. For more information, click the info buttons for Castello Plan map overlays.
            `;

modal_header_text["dutch-grants-stokes"] = "Dutch Grants, Stokes 1914-1916";
modal_content_html["dutch-grants-stokes"] = `
			This is a map of the Dutch Grants, drawn from property descriptions, meticulously sequenced and documented in Stokes’ Iconography of Manhattan Island. This map was traced to create the Dutch Grants layer, above. Turn on the Dutch Grants layer group to see information from Stokes’, with a link to the original grant documents. Click the info button for the Dutch Grants layer group for more information.
            `;

modal_header_text["ratzer-map"] = "Ratzer Map 1766";
modal_content_html["ratzer-map"] = `
			<i>The Plan of the City of New York in North America</i> by British military officer Bernard Ratzer, created in 1766-1767 and printed in 1770.
			<br><br>This is a colored version of the <i>Ratzer Map</i>, which It shows the city and vicinity in the years before the Revolutionary Era, full of the city streets, harbors, farms and fields, and hills, and many well illustrated details. Shown are Brooklyn and Manhattan, and the edges of Queens and New Jersey, right across from Manhattan.
            `;

			
modal_header_text["nyc-map-plan"] = "A Plan of the City of New York, 1730";
modal_content_html["nyc-map-plan"] = `
A map of New York from an actual survey in 1730, engraved by I. Carwitham and presented to John Montgomerie, the English colonial governor of New York. The map shows buildings that line streets, with a few buildings that are illustrated from a bird's eye view. Comparing with the Castello Plan in 1660, one can see there was already considerable infill along the edges of Manhattan, and the size of the city more than doubled, growing nearly to where the Brooklyn Bridge is today. Though the population increased several times, it was still small, at around 8000 people.
            `;



modal_header_text["original-grants-map"] = "Original Grants & Farms, Stokes 1914-1916";
modal_content_html["original-grants-map"] = `
			This map details the grants made in Manhattan through the Dutch period and into the early English period in New York, going all the way up to present day Harlem. It is drawn from property descriptions of original documents, published in Stokes' <i>Iconography of Manhattan Island, Volume 6</i>. It is supplementary to the Dutch Grants map, which you can select in the sidebar.
            `;

modal_header_text["satellite-image"] = "Current Satellite";
modal_content_html["satellite-image"] = `
			This is a current satellite map of the area, with roads highlighted and labeled. Use this to compare other map overlays, and see then vs now, swiping the vertical bar left and right.
            `;

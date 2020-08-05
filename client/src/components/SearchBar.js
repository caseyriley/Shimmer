import React from 'react';

const SearchBar = () => {


    return (
       
            <form className="nav-c__search">
                {/* <label data-track="gnSearchSearchIcon" aria-label="Search"> */}
                <svg id="magnifying-glass" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg>
                {/* </label>  */}
                <input className='search-icon-input' type="text" id="search-field"  placeholder="Photos, people, or groups" name="text" aria-label="Search" role="textbox"></input>
            </form>

        

        // <div class="view search-autosuggest-field-view expanded focus" id="yui_3_16_0_1_1596412147096_11912">
        //     <form method="get" action="/search/" role="search" class="search-form" id="yui_3_16_0_1_1596412147096_16060">
        //         <label data-track="gnSearchSearchIcon" aria-label="Search">
        //             <svg class="icon search-icon" style="width: 22px; height: 22px;" data-track="gnSearchSearchIcon" aria-label="Search"> <use xlink:href="#icon-search"></use></svg>
        //             <input type="submit" data-track="gnSearchSearchIcon" class="search-icon-button" tabindex="-1" aria-label="Search" role="button">
	    //         </label>
        //         <ul class="search-pillbox"></ul>
        //         <input type="text" id="search-field" class="autosuggest-selectable-item no-outline" placeholder="Photos, people, or groups" name="text" value="flower" autocomplete="off" aria-label="Search" role="textbox">
        //     </form>

        //     <div class="view search-autosuggest-items-list-view" id="yui_3_16_0_1_1596412147096_12183">
        //         <ul class="autosuggest-items-list" role="menu">
        //     </ul>
        //     </div>
        // </div>
    )
}

export default SearchBar;
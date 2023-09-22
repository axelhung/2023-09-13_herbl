    function btn01_onClick() { 
      var curr_step = 1;
      var tmp_res=''; arr_li = document.getElementsByTagName('input') ; for (i =1 ; i<= arr_li.length-2 ; i++){ arr_li[i].value=''; }
      try {
        var tmp_res = document.getElementById('input_0').value ;
        tmp_res = tmp_res.toUpperCase();
        arr_li[ ++curr_step ].value += tmp_res; /* step 02 */

        function upperToNumeric(match, offset, string) {
          return ((  match.charCodeAt(0) - ('A').charCodeAt(0) + 1 )+'').padStart(2,0) ;
        }
        var tmp_res = tmp_res.replace(/[A-Z]/g, upperToNumeric);
        arr_li[ ++curr_step ].value += tmp_res ; /* step 03 */

        const myRe0 = /(^5)([0-9])([0-9]*)/; const myArray0 = myRe0.exec( tmp_res );
        tmp_res = (myArray0 == null) ? tmp_res : myArray0[2]+myArray0[2]+myArray0[3] ;
        arr_li[ ++curr_step ].value += tmp_res ; /* step 04 */

        const myRe1 = /([0-9]*?)([0-9])(5$)/; const myArray1 = myRe1.exec( tmp_res );
        tmp_res = (myArray1 == null) ? tmp_res : myArray1[1]+myArray1[2]+myArray1[2] ;
        arr_li[ ++curr_step ].value += tmp_res ; /* step 05 */

        tmp_res = tmp_res.replace('5','') ;
        arr_li[ ++curr_step ].value += tmp_res ; /* step 06 */

        const myRe2 = /(^0)([0-9])([0-9]*)/; const arr_match_2 = myRe2.exec( tmp_res );  // console.log( tmp_match );
        tmp_res = (arr_match_2 == null) ? tmp_res : arr_match_2[2]+arr_match_2[2]+arr_match_2[3] ;
        arr_li[ ++curr_step ].value += tmp_res ; /* step 07 */

      } catch (err) {
        console.error(err) ;
      } 
    }
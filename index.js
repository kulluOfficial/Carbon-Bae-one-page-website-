function myFunction() {
    var input, filter, ul, li, a, i, h6, p, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < 9; i++) {
        h5 = document.getElementById("h5_"+i);
        h6 = document.getElementById("h6_"+i);
        p = document.getElementById("p_"+i);
        if((h5.textContent || h5.innerText) || (h6.textContent || h6.innerText) || (p.textContent || p.innerText))
        {
            txtValue1 = h5.textContent || h5.innerText;
            txtValue2 = h6.textContent || h6.innerText;
            txtValue3 = p.textContent || p.innerText;
            if ((txtValue1.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1) || (txtValue3.toUpperCase().indexOf(filter) > -1))
             {
                li[i].style.display = "";
             } else {
                li[i].style.display = "none";
            }
        }
        else{
            console.log('something else')
        }
    }
}
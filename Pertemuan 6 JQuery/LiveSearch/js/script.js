$('#search').keyup(() => {
    const searchField = $('#search').val();
    const expression = new RegExp(searchField, "i");

    $.getJSON('./data/tokoh.json', function (data) {
        let output = '<ul class="searchResults">';
        $.each(data, function (key, val) {
            if ((val.nama.search(expression) != -1) || (val.bio.search(expression) != -1)) {
                output += '<li>';
                output += `<h2> ${val.nama} </h2>`;
                output += `<img src="img/${val.imgname}.jpg" alt="${val.imgname}" height=160px;width=160px;/>`;
                output += `<p>${val.bio}</p>`;
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#output').html(output);
    });

});
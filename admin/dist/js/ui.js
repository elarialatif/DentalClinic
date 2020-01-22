$(document).ready(function() {
    console.log("Hiiiiiiiii!");
    // add row
    $("#g_images #addSlideModal .addSlide").click(function() {
        var description = $("#descriptionSlide").val();
        var x = $('td.number').html(function(i, val) { return +val + 1 });
        console.log(x);
        var image = $("#g_images #addSlideModal .image_show img").attr('src');
        var markup = "<tr><td class='number'>1</td><td class='image_show'><img src= " + image + "  /></td><td>" + description + "</td><td class='edit_image'><input type='file' name='file' value='Upload Image' /><span class='label label-primary' ><i class = 'fa fa-edit'></i></span> </td><td class='delete_image'><span class='label label-danger'><i class='fa fa-trash'></i> </span></td> </tr>";
        $("#g_images tbody").append(markup);
    });
    // Add slide
    $("#g_images #addSlideModal input[name=file]").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var img = $('#g_images #addSlideModal .image_show img').attr('src', e.target.result);
                $('#g_images #addSlideModal .image_show').append(img);
            };

            reader.readAsDataURL(this.files[0]);
        }
    });
    // delete image row
    $("#g_images .delete_image").click(function() {
        $(this).parents("tr").remove();
    });
});
$(document).ready(function() {
    console.log("Hiiiiiiiii!");
    // add row
    $("#g_images #addSlideModal .addSlide").click(function() {
        var description = $("#descriptionSlide").val();
        var x = $('#g_images td.number').html(function(i, val) { return +val + 1 });
        var image = $("#g_images #addSlideModal .image_show img").attr('src');
        var markup = "<tr><td class='number'>1</td><td class='image_show'><img src= " + image + "  /></td><td class='slideDesc'>" + description + "</td><td class='edit_image'><input type='button' name='editSlideModal' value='Upload Image' data-toggle='modal' data-target='#editSlideModal' /><span class='label label-primary' ><i class = 'fa fa-edit'></i></span> </td><td class='delete_image'><span class='label label-danger'><i class='fa fa-trash'></i> </span></td> </tr>";
        $("#g_images tbody").append(markup);
    });
    // add row
    $("#dentists #addDentistModal .addDentist").click(function() {
        var dentistName = $("#nameDentist").val();
        var dentistSpecialization = $("#specializedDentist").val();
        var dentistDescription = $("#descDentist").val();
        var xDentist = $('#dentists td.number').html(function(i, val) { return +val + 1 });
        // var image = $("#dentists #addDentistModal .image_show img").attr('src');
        var markupDentist = "<tr><td class='number'>1</td><td class='name'>" + dentistName + "</td><td class='specialization'>" + dentistSpecialization + "</td><td class='desc'>" + dentistDescription + "</td><td class='edit_dentist'><input type='button' name='editDentistModal' value='Upload Image' data-toggle='modal' data-target='#editDentistModal' /><span class='label label-primary' ><i class = 'fa fa-edit'></i></span></td><td class='delete_dentist'><span class='label label-danger'><i class='fa fa-trash'></i></span></td> </tr>";
        $("#dentists tbody").append(markupDentist);
    });
    // Add slide image
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
    $("#g_images").on("click", ".delete_image", function() {
        $(this).closest("tr").remove();
    });
    // delete dentist 
    $("#dentists").on("click", ".delete_dentist", function() {
        $(this).closest("tr").remove();
    });
});
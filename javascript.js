// Initialize the Dropzone instance
Dropzone.autoDiscover = false;

// Set the configuration options
Dropzone.options.myDropzone = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 10, // MB
  acceptedFiles: ".jpg,.jpeg,.png,.gif, .xlsx, .zip", // The file types that are accepted
  addRemoveLinks: true, // Show remove links for uploaded files
  dictRemoveFile: "Remove", // The label for the remove link
  init: function() {
    this.on("success", function(file, response) {
      // Handle the success response from the server
      console.log(response);
    });
    
    this.on("error", function(file, message) {
      // Handle the error response from the server
      console.log(message);
    });
  }
};

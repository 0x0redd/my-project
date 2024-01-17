  // Function to create the HTML structure
  function createGallery(folderPath) {
    const container = document.createElement('div');
    container.className = 'gallery';

    // Replace 'columns' with the desired number of columns
    const numColumns = 3;

    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div');
      column.className = 'column';

      const images = [
        "01112020-IMG_20201101_190130.JPG",
        "01112020-IMG_20201101_190402.JPG",
        "01112020-IMG_20201101_190846.JPG",
        "01112020-IMG_20201101_193120.JPG",
        "03112020-IMG_20201103_182534.JPG",
        "06122020-DSC_0027.JPG",
        "06122020-DSC_0073.JPG",
        "07112020-IMG_20201107_180703.JPG",
        "08112020-IMG_20201108_173358.JPG",
        "08112020-IMG_20201108_183136.JPG",
        "08112020-IMG_20201108_183416.JPG",
        "10112020-IMG_20201110_192050.JPG",
        "10112020-IMG_20201110_192302.JPG",
        "10122020-IMG_20201210_185031.JPG",
        "1122020-IMG_20201211_183132.JPG",
        "11122020-IMG_20201211_184713.JPG",
        "12122020-DSC_8781.JPG",
        "12122020-DSC_8787.JPG",
        "12122020-DSC_8816.JPG",
        "16102020-IMG_20201016_183428.JPG",
        "16102020-IMG_20201016_183658.JPG",
        "16102020-IMG_20201016_185413.JPG",
        "16102020-IMG_20201016_185508.JPG",
        "17112020-IMG_20201117_181054.JPG",
        "17112020-IMG_20201117_182159.JPG",
        "18112020-IMG_20201118_175602.JPG",
        "18112020-IMG_20201118_175606.JPG",
        "20112020-IMG_20201120_182419.JPG",
        "20112020-IMG_20201120_183529.JPG",
        "20191214-IMG_20191214_182212.jpg",
        "20200123-IMG_20200121_015450.jpg",
        "20200507-IMG_20190817_102846.jpg",
        "20200507-IMG_20191214_182845 (1).jpg",
        "20200507-IMG_20200322_210643.jpg",
        "20200507-IMG_20200322_211639.jpg",
        "20200930-IMG_20200930_190829 (1).jpg",
        "20201004-IMG_20201004_194146.jpg",
        "20201008-IMG_20200915_193958.jpg",
        "20201013-IMG_20201013_184708.jpg",
        "20201025-IMG_20201025_183510 (1).jpg",
        "20201027-IMG_20201025_183444.jpg",
        "20201028-IMG_20201028_190200.jpg",
        "20201228-IMG_20201228_170334.jpg",
        "20201228-IMG_20201228_170345.jpg",
        "20201228-IMG_20201228_171023.jpg",
        "23122020-DSC_8833.JPG",
        "23122020-DSC_8861.JPG",
        "23122020-DSC_8865.JPG",
        "23122020-DSC_8877.JPG",
        "27092020-IMG_20200927_190502.JPG",
        "27092020-IMG_20200927_192818.JPG",
        "27112020-IMG_20201127_173833.JPG",
        "27112020-IMG_20201127_173903.JPG",
        "27112020-IMG_20201127_173904.JPG",
        "27112020-IMG_20201127_173908.JPG",
        "28102020-IMG_20201028_183034.JPG",
        "28102020-IMG_20201028_190200.JPG",
        "28102020-IMG_20201028_190214.JPG",
        "29022020-IMG_20200229_201517.JPG",
        "31102020-IMG_20201031_190720.JPG",
        "31122020-DSC_8952.JPG",
        "DSC_0016.jpg",
        "DSC_0020.jpg",
        "DSC_9017.jpg",
        "IMG_20190817_102953.jpg",
        "IMG_20200322_205824.jpg",
        "IMG_20200624_203153.jpg",
        "IMG_20200720_205701.JPG",
        "IMG_20200720_210026.JPG",
        "IMG_20200726_015051.TIF",
        "IMG_20200920_202833.jpg",
        "IMG_20201018_185649.jpg",
        "sumer 3-132840.PNG",
      ];

      images.forEach(images => {
        const photo = document.createElement('div');
        photo.className = 'photo';

        const img = document.createElement('img');
        img.src = folderPath + '/' + images; // Concatenate folderPath with imageSrc
        img.alt = 'Image';

        photo.appendChild(img);
        column.appendChild(photo);
      });

      container.appendChild(column);
    }

    document.body.appendChild(container);
  }

  // Call the function with the folder path containing your images
  createGallery('images/19-20');
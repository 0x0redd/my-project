<?php
        $dossier = 'images';
        $images = glob($dossier . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
    
        if ($images !== false) {
            foreach ($images as $image) {
                echo '<div class="grille">';
                echo '<img class="image" src="' . $image . '" alt="Image">';
                echo '</div>';
            }
        } else {
            echo '<p>No images found in the "images" folder.</p>';
        } ?>
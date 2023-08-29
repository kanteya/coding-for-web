<!DOCTYPE html>
<html lang="en-GB">
            
    <head>       
        <title>INDEX</title>
        <?php include('php/meta.php'); ?>
    </head>       

    <body>
        <header><a href="/D12.E1/index.php" id="back-button">MULTIPAGE PHP WEBSITE</a></header>

        <div class="content-wrap">
            <main>
                <h1>This is the home page</h1>
            </main>
        
            <aside>
                <nav>
                    <p>POSTS:</p>
                    <!-- section 1 menu-->
                    <a class="sectiontitle" id="">Section 1</a>
                    <ul>
                        <li><a href="/D12.E1/section1/artem.php" id="">Artem Kostyukevich</a></li>
                        <li><a href="">Page 2</a></li>
                        <li><a href="">Page 3</a></li>
                    </ul>
                    
                    <!-- section 2 menu-->
                    <a class="sectiontitle">Section 2</a>
                    <ul>
                        <li><a href="">Page 1</a></li>
                        <li><a href="">Page 2</a></li>
                        <li><a href="">Page 3</a></li>
                    </ul>         

                    <a href="">About</a>
                </nav>
                <br>
                <hr>
                <p class="s">Because punching trees isn't enough</p>
            </aside>
        </div>
        
        <footer><p class="s">Footer text comes here</p></footer>

    </body>
</html>



<!-- REFERENCE PHP CODE: -->
<!--
Declare variables
<?php $thisSection=""; ?>

Echo function w. if statement
<?php if ($thisPage!="") echo "$thisPage"; ?>

Include function
<?php include("php/something.php"); ?>

Add an ID to an element dynamically
<?php if ($thisPage=="Page One") echo " id=\"currentpage\""; ?>
Add this as an attribute within an element

Date
<?php
date_default_timezone_set('Asia/Kolkata');
echo "" . date("Y") ;
?>
-->
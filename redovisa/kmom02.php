<!doctype html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>Om kursen Javascript</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
    <?php include'navbar.php' ?>
        <main>
            

            
            <a href="https://dbwebb.se/kurser/js-v2">Dbwebb-JS</a> |
            <a href="https://github.com/dbwebb-se/js-v2">Dbwebb-JS</a>
            <p id="p1"></p>
            <p id="p2"></p>
            <p id="p3"></p>
            <p><img src="img/js.webp" width="500" alt="Bild på mig"></p>
            
        </main>
    </body>
    <script>
        
        var date = new Date();
        document.getElementById("p1").innerHTML = date;
        document.getElementById("p2").innerHTML = date.getHours();
        var stuff = date.getHours();
        if (stuff > 12) {
            document.getElementById("p3").innerHTML = "God eftermiddag";
        }
        if (stuff < 12) {
            document.getElementById("p3").innerHTML = "God förmiddag";
        }
    </script>
    
</html>

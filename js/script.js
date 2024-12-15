// for mobile
document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("touchstart", () => {
    let objects;
    let h4Text;

    // Define objects and h4 text for each case
    switch (index) {
      case 0:
        objects = [
          {
            title: "FL Studio 1 - Begin & Playlist", 
            description: "In deze video leer ik jullie hoe je start met FL Studio, en hoe je te werk gaat met de Playlist.", 
            imgSrc: "images/fl1.png",
            link: "https://youtu.be/-pm22FzaH2Q"
          },
          {
            title: "FL Studio 2 - Channel Rack", 
            description: "In deze video bespreken we hoe je de channel rack gebruikt in FL Studio. Hier kom je te weten over samples, hoe je de channel rack gebruikt, en hoe je je eerste beat maakt.", 
            imgSrc: "images/fl2.png",
            link: "https://youtu.be/2Vahrx9FEz0"
          },
          {
            title: "FL Studio 3 - Piano Roll", 
            description: "In deze video kom je te weten hoe je de Piano Roll gebruikt. Hier kom je te weten over hoe de piano roll te werk gaat, en hoe je je eerste melodie maakt (shortcuts).", 
            imgSrc: "images/fl3.png",
            link: "https://youtu.be/gdzGV8WB8cU"
          }
        ];
        h4Text = "Chapter 1";
        break;
      case 1:
        objects = [
          {
            title: "FL Studio 4 - Patterns",
            description: "In deze video kom je te weten hoe je met de mixer omgaat. Hier leer je hoe je de volume regelt, hoe je effecten gebruikt, mono, etc.",
            imgSrc: "images/fl4.png",
            link: "https://youtu.be/Fp_A-UM59zo"
          },
          {
            title: "FL Studio 5 - Mixer",
            description: "In deze video kom je te weten hoe je met de mixer omgaat. Hier leer je hoe je de volume regelt, hoe je effecten gebruikt, mono, etc.",
            imgSrc: "images/fl5.png",
            link: "https://youtu.be/W6g_3zzoMTk"
          },
          {
            title: "FL Studio 6 - Workflow",
            description: "In deze video leer je hoe je je workflow verbetert. Hier hernoem je patterns, gebruik je kleur, en groepeer je instrumenten.",
            imgSrc: "images/fl6.png",
            link: "https://youtu.be/6WuLaRA9Cws"
          }
        ];
        h4Text = "Chapter 2";
        break;
      case 2:
        objects = [
          {
            title: "FL Studio 7 - Automation",
            description: "In deze video leer je hoe je met automation te werk gaat. Hier leer je hoe je een low-pass intro maakt, en hoe je bepaalde dingen zachter kan maken in de mix.",
            imgSrc: "images/fl7.png",
            link: "https://youtu.be/y_7yRZ_a5TQ"
          },
          {
            title: "FL Tutorial 8 - Call & Response",
            description: "In deze video leer je hoe een veelgebruikte truc werkt: 'call & response', één van de meest fundamentele onderwerpen in de muziekwereld.",
            imgSrc: "images/fl8.png",
            link: "https://youtu.be/qbuCkKf_Ygk"
          },
          {
            title: "FL Tutorial 9 - Mastering",
            description: "In deze video leer je hoe je een liedje mastert, zodat het eindproduct clean and crisp is. Hier vertel ik wat mastering is, vertel ik waar je op moet letten, leer je hoe je je eigen oren vertrouwt, en hoe de -db Meter te werk gaat.",
            imgSrc: "images/fl9.png",
            link: "https://youtu.be/d8JIuKD_oNE"
          }
        ];
        h4Text = "Chapter 3";
        break;
    }

    // Update h4 text
    document.querySelector("h4").innerHTML = h4Text;

    // Update first item
    document.getElementById("title1").innerHTML = objects[0].title;
    document.getElementById("desc1").innerHTML = objects[0].description;
    document.getElementById("img1").src = objects[0].imgSrc;
    document.getElementById("link1").href = objects[0].link;
    document.getElementById("link1").innerHTML = "link naar video";

    // Update second item
    document.getElementById("title2").innerHTML = objects[1].title;
    document.getElementById("desc2").innerHTML = objects[1].description;
    document.getElementById("img2").src = objects[1].imgSrc;
    document.getElementById("link2").href = objects[1].link;
    document.getElementById("link2").innerHTML = "link naar video";

    // Update third item
    document.getElementById("title3").innerHTML = objects[2].title;
    document.getElementById("desc3").innerHTML = objects[2].description;
    document.getElementById("img3").src = objects[2].imgSrc;
    document.getElementById("link3").href = objects[2].link;
    document.getElementById("link3").innerHTML = "link naar video";

    // Reset all buttons' background
    document.querySelectorAll("button").forEach(btn => {
      btn.style.backgroundColor = "";
    });

    // Highlight clicked button
    button.style.backgroundColor = "orange";
  });
});

document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    let objects;
    let h4Text;

    // Define objects and h4 text for each case
    switch (index) {
      case 0:
        objects = [
          {
            title: "FL Studio 1 - Begin & Playlist", 
            description: "In deze video leer ik jullie hoe je start met FL Studio, en hoe je te werk gaat met de Playlist.", 
            imgSrc: "images/fl1.png",
            link: "https://youtu.be/-pm22FzaH2Q"
          },
          {
            title: "FL Studio 2 - Channel Rack", 
            description: "In deze video bespreken we hoe je de channel rack gebruikt in FL Studio. Hier kom je te weten over samples, hoe je de channel rack gebruikt, en hoe je je eerste beat maakt.", 
            imgSrc: "images/fl2.png",
            link: "https://youtu.be/2Vahrx9FEz0"
          },
          {
            title: "FL Studio 3 - Piano Roll", 
            description: "In deze video kom je te weten hoe je de Piano Roll gebruikt. Hier kom je te weten over hoe de piano roll te werk gaat, en hoe je je eerste melodie maakt (shortcuts).", 
            imgSrc: "images/fl3.png",
            link: "https://youtu.be/gdzGV8WB8cU"
          }
        ];
        h4Text = "Chapter 1";
        break;
      case 1:
        objects = [
          {
            title: "FL Studio 4 - Patterns",
            description: "In deze video kom je te weten hoe je met de mixer omgaat. Hier leer je hoe je de volume regelt, hoe je effecten gebruikt, mono, etc.",
            imgSrc: "images/fl4.png",
            link: "https://youtu.be/Fp_A-UM59zo"
          },
          {
            title: "FL Studio 5 - Mixer",
            description: "In deze video kom je te weten hoe je met de mixer omgaat. Hier leer je hoe je de volume regelt, hoe je effecten gebruikt, mono, etc.",
            imgSrc: "images/fl5.png",
            link: "https://youtu.be/W6g_3zzoMTk"
          },
          {
            title: "FL Studio 6 - Workflow",
            description: "In deze video leer je hoe je je workflow verbetert. Hier hernoem je patterns, gebruik je kleur, en groepeer je instrumenten.",
            imgSrc: "images/fl6.png",
            link: "https://youtu.be/6WuLaRA9Cws"
          }
        ];
        h4Text = "Chapter 2";
        break;
      case 2:
        objects = [
          {
            title: "FL Studio 7 - Automation",
            description: "In deze video leer je hoe je met automation te werk gaat. Hier leer je hoe je een low-pass intro maakt, en hoe je bepaalde dingen zachter kan maken in de mix.",
            imgSrc: "images/fl7.png",
            link: "https://youtu.be/y_7yRZ_a5TQ"
          },
          {
            title: "FL Tutorial 8 - Call & Response",
            description: "In deze video leer je hoe een veelgebruikte truc werkt: 'call & response', één van de meest fundamentele onderwerpen in de muziekwereld.",
            imgSrc: "images/fl8.png",
            link: "https://youtu.be/qbuCkKf_Ygk"
          },
          {
            title: "FL Tutorial 9 - Mastering",
            description: "In deze video leer je hoe je een liedje mastert, zodat het eindproduct clean and crisp is. Hier vertel ik wat mastering is, vertel ik waar je op moet letten, leer je hoe je je eigen oren vertrouwt, en hoe de -db Meter te werk gaat.",
            imgSrc: "images/fl9.png",
            link: "https://youtu.be/d8JIuKD_oNE"
          }
        ];
        h4Text = "Chapter 3";
        break;
    }

    // Update h4 text
    document.querySelector("h4").innerHTML = h4Text;

    // Update first item
    document.getElementById("title1").innerHTML = objects[0].title;
    document.getElementById("desc1").innerHTML = objects[0].description;
    document.getElementById("img1").src = objects[0].imgSrc;
    document.getElementById("link1").href = objects[0].link;
    document.getElementById("link1").innerHTML = "link naar video";

    // Update second item
    document.getElementById("title2").innerHTML = objects[1].title;
    document.getElementById("desc2").innerHTML = objects[1].description;
    document.getElementById("img2").src = objects[1].imgSrc;
    document.getElementById("link2").href = objects[1].link;
    document.getElementById("link2").innerHTML = "link naar video";

    // Update third item
    document.getElementById("title3").innerHTML = objects[2].title;
    document.getElementById("desc3").innerHTML = objects[2].description;
    document.getElementById("img3").src = objects[2].imgSrc;
    document.getElementById("link3").href = objects[2].link;
    document.getElementById("link3").innerHTML = "link naar video";

    // Reset all buttons' background
    document.querySelectorAll("button").forEach(btn => {
      btn.style.backgroundColor = "";
    });

    // Highlight clicked button
    button.style.backgroundColor = "orange";
  });
});
+++
title = "devendrn"

[extra]
hero_title = "Devendran S.S"
hero_caption = "Computer Artist and Programmer"

messagecard_socials = [
    { fa_icon = "fa-brands fa-github", alt="devendrn", url="https://github.com/devendrn" },
    { fa_icon = "fa-brands fa-discord", alt = "devendrn#0", url = "" },
    { fa_icon = "fa-brands fa-linkedin-in", alt = "devendran-s-s", url = "" },
    { fa_icon = "fa-regular fa-envelope", alt = "devman2857@gmail.com", url = "" }
]
+++

<div style="display: flex; gap: 10px;">

{{ messagecard(
    title="Hi there!"
    description="
I'm Devendran S.S, an engineering student and computer enthusiast. You can see some of my past works over here.
Feel free to check them out.
"
    socials_name="messagecard_socials"
    size = 2
) }}

<div class="card card--animated-cog" style="flex:1;"> 
  <i class="fa-solid fa-cog"></i>
</div>

</div>

# Explore

<div style="width: 100%; display: flex; flex-wrap: wrap; gap: 10px;">

{{ explorecard(
    title = "Newb Shader"
    description = "Featured hobby work"
    image = "https://i.ibb.co/z2DXZCf/night3.jpg"
    url = "/newb-shader"
    size = 2
) }}

{{ explorecard(
    title = "Projects"
    description = "See my projects"
    image = "https://i.ibb.co/N6JNQL1/projects-bg.jpg"
    url = "/projects"
    size = 1
) }}

{{ explorecard(
    title = "Void"
    description = "Backdoor to void (locked)"
    image = "https://i.ibb.co/y4H83wG/void-bg.jpg"
    url = ""
    size = 1
) }}

{{ explorecard(
    title = "Gallery"
    description = "A collection of my artworks"
    image = "https://i.ibb.co/kqRZntj/artworks-bg.jpg"
    url = "/gallery"
    size = 2
) }}

</div>

# More about me!

Regarding my hobbies, I like to read documentaries and listen to instrumental music.
My favorite music genres are ambient, orchestral, and country.
I'm a Linux addict, and I love FOSS.
You can find me on Discord if you want to chat!

All images you see in my portfolio are original art.

# Listen to an Internet Radio

Instrumental Music Radio:
<figure>
    <figcaption></figcaption>
    <audio controls src="https://quincy.torontocast.com:1925/stream" style="width: 100%"></audio>
</figure>


<style>

.card--animated-cog > i {
  animation: m 20s infinite linear;
}

@keyframes m {
  100% { transform: rotate(-360deg); }
}

@media screen and (max-width: 560px) {
  .card--animated-cog {
    display: none;
  }
  .hero__title {
    font-size: 56px;
  }
}

</style>

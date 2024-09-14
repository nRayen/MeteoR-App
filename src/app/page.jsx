'use client'
import Image from "next/image";
import NuageuxSVG from "@/components/svg/NuageuxSVG";
import FaviconSVG from "@/components/svg/FaviconSVG";
import LoupeSVG from "@/components/svg/LoupeSVG";
import FlecheGaucheSVG from "@/components/svg/FlecheGaucheSVG";
import FlecheDroiteSVG from "@/components/svg/FlecheDroiteSVG";

export default function Home() {
  return (
    <body>
    <header>
        <FaviconSVG id="favicon" alt="favcon"/>
        <h1 id="title">MeteoR</h1>
        <form class="searchbar glass">
            <input type="text" name="searchbar" id="searchInput" placeholder="Chercher un lieu" autocomplete="off"/>
            <LoupeSVG/>
            <ul class="suggestions-list glass">
                <li class="suggestion">Paris</li>
                <li class="suggestion">New York</li>
                <li class="suggestion">Dakar</li>
                <li class="suggestion">Hanoï</li>
            </ul>

        </form>
        <button class="menu-button" aria-label="menu-button">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </button>
    </header>

    <main>
        <section class="current">
                <h2 class="currentCity">Paris</h2>

                <div class="date">
                    <button class="dateselector dateLeft" aria-label="date-selector-left"><FlecheGaucheSVG/></button>
                    <p>05/09/2024</p>
                    <button class="dateselector dateRight" aria-label="date-selector-left"><FlecheDroiteSVG/></button>
                </div>

            <p class="temperature">20°C</p>
            <div class="sky">
                <NuageuxSVG alt="nuage" class="sky-icon"/>
                <p class="sky-label">Nuageux</p>
            </div>
        </section>


        <div class="informations">
            <div class="left">
                <section class="weather-info">
                    <article class="card glass">
                        <h3 class="glass-text">Air quality</h3>
                        <div>
                            <p></p>
                            <Image src="" alt=""/>
                        </div>
                    </article>

                    <article class="card glass">
                        <h3 class="glass-text">Lorem</h3>
                        <div>
                            <p></p>
                        <Image src="" alt=""/>
                    </div>
                    </article>

                    <article class="card glass">
                        <h3 class="glass-text">Lorem</h3>
                        <div>
                            <p></p>
                            <Image src="" alt=""/>
                        </div>
                    </article>

                    <article class="card glass">
                        <h3 class="glass-text">Lorem</h3>
                        <div>
                            <p></p>
                            <Image src="" alt=""/>
                        </div>
                    </article>
                </section>

                <section class="daily glass">
                    <h3 class="glass-text">Jours à venir</h3>
                    <div class="preview-d">

                        <div class="day">
                            <h4>Mardi</h4>
                            <NuageuxSVG alt="nuage"/>
                            <div class="temp"><span class="min">8°</span><span class="max">23°</span></div>
                        </div>

                        <div class="day">
                            <h4>Mercredi</h4>
                            <NuageuxSVG alt="nuage"/>
                            <div class="temp"><span class="min">8°</span><span class="max">23°</span></div>
                        </div>

                        <div class="day">
                            <h4>Jeudi</h4>
                            <NuageuxSVG alt="nuage"/>
                            <div class="temp"><span class="min">8°</span><span class="max">23°</span></div>
                        </div>

                    </div>
                </section>
            </div>

            <section class="hourly glass">
                <h3 class="glass-text">Prévisions</h3>
                <div class="preview-h">

                    <div class="h">
                        <h4>00h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>01h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>02h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>03h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>04h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>05h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>06h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>07h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>08h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>09h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>10h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>11h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>12h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>13h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>14h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>15h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>16h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>17h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>18h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>19h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>20h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>21h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>22h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                    <div class="h">
                        <h4>23h</h4>
                        <NuageuxSVG alt="nuage"/>
                        <p>20°</p>
                    </div>

                </div>
            </section>
        </div>
    </main>
    <footer>
        <div class="credits">
            <FaviconSVG alt="logo"/>
            <p>© 2024 - MeteoR</p>
            <p>by <a href="https://github.com/nRayen">nRayen</a></p>

        </div>
    </footer>

</body>
  );
}

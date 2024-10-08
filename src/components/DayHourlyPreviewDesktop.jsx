import React from 'react'
import NuageuxSVG from './svg/NuageuxSVG'

const DayHourlyPreviewDesktop = ({data}) => {

  


  return (
    <div className="day">
					<p>Auj.</p>
					<div className="hours">
						<div className="h">
							<h4>00h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>03h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>06h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>09h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>12h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>15h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>18h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>

						<div className="h">
							<h4>21h</h4>
							<NuageuxSVG alt="nuage" />
							<p>20°</p>
						</div>
					</div>
				</div>
  )
}

export default DayHourlyPreviewDesktop
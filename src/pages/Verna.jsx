import { useEffect } from "react";
import img1 from "../assets/Verna/1.jpg";
import img2 from "../assets/Verna/2.jpg";
import img3 from "../assets/Verna/3.jpg";
import img4 from "../assets/Verna/4.jpg";
import img5 from "../assets/Verna/5.jpg";
import img6 from "../assets/Verna/6.jpg";
import img7 from "../assets/Verna/7.jpg";

const Verna = () => {
  useEffect(() => {
    // Create link element
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapLink.integrity =
      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    bootstrapLink.crossOrigin = "anonymous";

    // Append to head
    document.head.appendChild(bootstrapLink);

    //Cleanup: remove link when component is unmounted
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);
  return (
    <div>
      <header className="w-screen">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner carousel-img-size">
            {[img5, img2, img3, img4, img7, img6].map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="3000"
                key={index}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-caption d-none d-md-block">
                  <button className="btn btn-light">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <div className="row  bg-black text-white ">
        <div className="col">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#engine"
              >
                Engine
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#dimension">
                Dimension
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#suspension">
                Suspension Brakes and Wheels
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#capability">
                Capability
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#transmission">
                Transmission
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="engine">
              <h3>Engine Details</h3>
              <ul>
                <li>
                  <h4>Engine: 1.5L MPI Petrol</h4>
                  <ul>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>
                          Engine Capacity (cm<sup>3</sup>): 1497
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Power (kW @ r/min): 85 @ 6000</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Torque (Nm @ r/min): 3144 @ 4500</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Fuel Tank Capacity (litre): 45</p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Engine: 1.5L U2 CRDi Diesel</h4>
                  <ul>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>
                          Engine Capacity (cm<sup>3</sup>): 1493
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Power (kW @ r/min): 85.8 @ 4000</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Torque (Nm @ r/min): 250 @ 1500-2750</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Fuel Tank Capacity (litre): 45</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="dimension">
              <h3>Dimension Details</h3>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Length (mm): 4440</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Width (mm): 1729</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Height (mm):1475</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Wheelbase (mm): 2600</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Track (mm): 1505</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Track (mm): 1505</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>
                      5-Seater [2 + 3] (Front: 2 Forward-Facing, Rear: 3
                      Forward-Facing)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="suspension">
              <h3>Suspension, Brakes, and Wheels</h3>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Suspension: McPherson Strut with Coil Spring</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>
                      Rear Suspension: Coupled Torsion Beam Axle with Coil
                      Spring
                    </p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>
                      Brake Specifications: Disc brakes in the front and Drum
                      brakes in the rear
                    </p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Brakes: Ventilated Disc</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Brakes: Drum</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Tyres: 195/55 R16 Radial Tubeless Tyres</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="capability">
              <h3>Capability</h3>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Ground Clearance (mm): 165</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Approach Angle: 15.5 degrees</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Departure Angle: 16.9 degrees</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rampover Angle: Not specified</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Water Wading Depth (mm): Not specified</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="transmission">
              <h3>Transmission</h3>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>
                      Transmission Type: 6-Speed Manual (Available for all
                      variants)
                    </p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Drive: Front-Wheel Drive (FWD)</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>
                      Steering: Rack & Pinion Electric Power Steering (EPS) for
                      improved efficiency and control
                    </p>
                  </div>
                </li>
              </ul>
              <h4>Safety</h4>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Anti-Lock Braking System</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Central Locking</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>No. of Airbags: 6</p>
                  </div>
                </li>

                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Day & Night Rear View Mirror</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Electronic Brakeforce Distribution</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Electronic Stability Control</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Tyre Pressure Monitor</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>ADAS Feature</p>
                  </div>
                </li>
              </ul>
              <h4>Comfort & Convenience</h4>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Power Steering</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Power Windows-Front</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Power Windows-Rear</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Air Conditioner</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Automatic Climate Control</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Air Quality Control</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verna;

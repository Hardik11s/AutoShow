import React from "react";
import img0 from "../assets/BMW Z4/0.jpg";
import imgMountain from "../assets/BMW Z4/mountain.jpg";
import imgInterior from "../assets/BMW Z4/interior.webp";
import imgSide from "../assets/BMW Z4/side.webp";
import imgSteering from "../assets/BMW Z4/streeing.webp";
import { useEffect } from "react";
const Bmw = () => {
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

    // Cleanup: remove link when component is unmounted
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);
  return (
    <div>
      <header>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {[0, 1, 2, 3, 4].map((index) => (
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
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src={img0}
                className="d-block w-100"
                alt="BMW Z4 Front View"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgMountain}
                className="d-block w-100"
                alt="BMW Z4 in Mountain"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgInterior}
                className="d-block w-100"
                alt="BMW Z4 Interior"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgSide}
                className="d-block w-100"
                alt="BMW Z4 Side View"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgSteering}
                className="d-block w-100"
                alt="BMW Z4 Steering"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
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

      <div className="row  bg-black text-white">
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
              <a className="nav-link" data-bs-toggle="tab" href="#Interior">
                Interior
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#Exterior">
                Exterior
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="engine">
              <h3>Engine Details</h3>
              <ul>
                <li>
                  <h4>TwinPower Turbo 6-cylinder</h4>
                  <ul>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Displacement: 2998cc</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Power: 335bhp@5000-6500rpm</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Torque: 500Nm@1600-4500rpm</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>No. of Cylinders: 6</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Valves Per Cylinder: 4</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Turbo Charger: Twin</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Gear Box: 8-Speed Steptronic</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Drive Type: RWD</p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Fuel & Performance</h4>
                  <ul>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Fuel Type: Petrol</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Petrol Fuel Tank Capacity: 52 Litres</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Emission Norm Compliance: BS VI 2.0</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Top Speed: 250 kmph</p>
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
                    <p>Length (mm): 4324</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Width (mm): 2024</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Height (mm): 1304</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Wheelbase (mm): 2740</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Track (mm): 1473</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Track (mm): 1616</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Seating Capacity: 2</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Kerb Weight: 1610 Kg</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Gross Weight: 1860 Kg</p>
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
                    <p>Front Suspension: Adaptive M suspension</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Suspension: Adaptive M suspension</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Acceleration: 4.5</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>0-100kmph: 4.5</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Brakes: 325mm Disc</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="Interior">
              <h4>Interior</h4>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Tachometer</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Electronic Multi-Tripmeter</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Leather Seats</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Leather Steering Wheel</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Glove Compartment</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Digital Clock</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Digital Odometer</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Driving Experience Control Eco</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="Exterior">
              <h4>Exterior</h4>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Adjustable Headlights</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Power Adjustable Exterior Rear View Mirror</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Electric Folding Rear View Mirror</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Alloy Wheels</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Outside Rear View Mirror Turn Indicators</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Intergrated Antenna</p>
                  </div>
                </li>
              </ul>
              <h4>Additional Features</h4>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Trunk Opener: Smart</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Tyre Size: 255/35 ZR19</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Tyre Type: Radial, Run flat</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>LED DRLs</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>LLED Headlights</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>LED Headlights</p>
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
                    <p>Brake Assist</p>
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
                    <p>Anti-Theft Alarm</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>No. of Airbags: 4</p>
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
                    <p>Seat Belt Warning</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Door Ajar Warning</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Traction Control</p>
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
                    <p>Engine Immobilizer</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>ADAS</p>
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

export default Bmw;

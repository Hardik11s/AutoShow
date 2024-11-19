import img1 from "../assets/Fortuner/1.jpg";
import img2 from "../assets/Fortuner/2.jpg";
import img3 from "../assets/Fortuner/3.jpg";
import img4 from "../assets/Fortuner/4.jpg";
import img5 from "../assets/Fortuner/5.jpg";
import img6 from "../assets/Fortuner/6.jpg";
import img7 from "../assets/Fortuner/7.jpg";
import img8 from "../assets/Fortuner/8.jpg";
import { useEffect } from "react";
const Fortuner = () => {
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
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
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
                src={img1}
                className="d-block w-100"
                alt="Fortuner Image 1"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="Fortuner Image 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100"
                alt="Fortuner Image 3"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img4}
                className="d-block w-100"
                alt="Fortuner Image 4"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img5}
                className="d-block w-100"
                alt="Fortuner Image 5"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img6}
                className="d-block w-100"
                alt="Fortuner Image 6"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img7}
                className="d-block w-100"
                alt="Fortuner Image 7"
              />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img8}
                className="d-block w-100"
                alt="Fortuner Image 8"
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
                <li>
                  <h4>Engine: 2.7L Petrol Engine</h4>
                  <ul>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Engine Type: 2.7L Petrol Engine</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Displacement: 2694 cc</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Power: 163.60bhp@5200rpm</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Max Torque: 245Nm@4000rpm</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>No. of Cylinders: 4</p>
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
                        <p>Valve Configuration: DOHC</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Fuel Supply System: Direct Injection</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Turbo Charger: Not Specified</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Transmission Type: Manual</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Gear Box: 5-Speed</p>
                      </div>
                    </li>
                    <li>
                      <div className="point-box"></div>
                      <div className="point-description">
                        <p>Drive Type: 2WD</p>
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
                    <p>Length: 4795 mm</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Width: 1855 mm</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Height: 1835 mm</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Wheelbase: 2745 mm</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Seating Capacity: 7</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>No. of Doors: 5</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="suspension">
              <h3>Suspension, Steering & Brakes</h3>
              <ul>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Suspension: Double Wishbone</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Suspension: 4-Link With Coil Spring</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Steering Type: Electric</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Steering Column: Tilt & Telescopic</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Turning Radius: 5.8 Metres</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Front Brake Type: Ventilated Disc</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rear Brake Type: Ventilated Disc</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Alloy Wheel Size Front: 17 Inch</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Alloy Wheel Size Rear: 17 Inch</p>
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
                    <p>Water Wading Depth (mm): 700</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Approach Angle: 29 degrees</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Departure Angle: 25 degrees</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Rampover Angle: 25 degrees</p>
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
                    <p>Transmission Type: 5-Speed Manual</p>
                  </div>
                </li>
                <li>
                  <div className="point-box"></div>
                  <div className="point-description">
                    <p>Drive Type: 2WD</p>
                  </div>
                </li>
              </ul>
              <h3>Safety</h3>
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
                    <p>No. of Airbags: 7</p>
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

export default Fortuner;

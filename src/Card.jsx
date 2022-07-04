import React from 'react';
// import {NavLink} from 'react-router-dom';
// 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
// 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
// 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
// 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

const Card=(props)=>{
    return (
        <> 
           {/* card 0 */}
            <div className='col-md-4 col-10 mx-auto'>
                  <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">{props.content}</p>
                      <a href={props.abc} className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
                  {/* card 1*/}
                  {/* <div className='col-md-4 col-10 mx-auto'>
                  <div className="card">
                    <img src="image/images.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div> */}
                  {/* card 2 */}
                  {/* <div className='col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img src="image/images.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div> */}
                    {/* card 3 */}

                  {/* <div className='col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img src="image/images.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div> */}
                    {/* card 4 */}

                  {/* <div className='col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img src="image/images.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div> */}

                       {/* card 5 */}
                  {/* <div className='col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img src="image/images.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div> */}
        </>
    )
}
export default Card;
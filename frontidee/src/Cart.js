import 'bootstrap/dist/css/bootstrap.css';
function Card()
{
    return ( <div className="col-sm-3 mb-2 shadow-lg p-3 bg-body rounded" id="">
                <div className="card text-center" >
                    <div className="d-flex justify-content-end">
                        <i className="bi bi-pen btn text-warning" id=""></i>
                        <i className="bi bi-x-lg btn text-danger"id=""></i>
                    </div>
                    <img src="" className="card-img mx-auto d-block img-fluid w-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-black">Titre Description</h5>
                        <p className="text-black">False</p>
                        <a href="#" id="" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>);
}

export default Card;
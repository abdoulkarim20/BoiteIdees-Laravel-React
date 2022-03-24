

function Formulaire() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-4 ">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="titre" className="form-label">Titre</label>
                                <input type="text" className="form-control" id="titre"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                            </div>


                            <button type="submit" className="btn btn-primary" value="ajouter">Ajouter</button>
                        </form>
                    </div>
                    <div className="col-md-6  col-sm-12 col-lg-4 ">
                        <img src="/img1.png" alt="" style={wh}/>
                    </div>
                </div>
            </div>
        );


        }
export default Formulaire;
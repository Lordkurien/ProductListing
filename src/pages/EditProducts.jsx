

const EditProducts = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

            <form action="">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
              </div>

              <input
                type="submit"
                value={"Save"}
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProducts

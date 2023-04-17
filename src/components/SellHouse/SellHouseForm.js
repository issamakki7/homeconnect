import React,{useState} from 'react';
import './SellHouse.css';

function SellHouseForm(){
    const [formData, setFormData] = useState({
        address: '',
        description: '',
        // occupation: '',
        askingPrice: '',
        floors: '',
        bedrooms: '',
        bathrooms: '',
        condition: '',
        amenities: [],
      })
    
      const onChangeHandler = (event) => {
    
        console.log(event)
        if (event.target.name === 'amenities') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.amenities.push(event.target.value)
          } else {
            copy.amenities = copy.amenities.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          }))
        }
      }
    
      const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
      }

      return (
        <div className="sell-house-main">
          <h1 className='sell-house-title'>Sell House</h1>
          <form onSubmit={onSubmitHandler}>

            <div className="sellform-group">
              <label htmlFor="address" className="sellform-label">House Address</label>
              <input className="sellform-control" name="address" onChange={onChangeHandler} value={formData.address} />
            </div>

            <div className="sellform-group">
              <label htmlFor="description" className="sellform-label">Description</label>
              <input className="description-box" name="description" onChange={onChangeHandler} value={formData.description} />
            </div>

            <div className="sellform-group">
              <label htmlFor="askingPrice" className="sellform-label">Asking Price</label>
              <input className="sellform-control" name="askingPrice" onChange={onChangeHandler} value={formData.askingPrice} />
            </div>

            {/* <div className="sellform-group">
              <label htmlFor="occupation" className="sellform-label">Occupation</label>
              <select className="sellform-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
            </div> */}

            {/* Floors */}
            <div className="sellform-group">
              <label htmlFor="floors" className="sellform-label">Floors</label>
              <div>
                <div>
                  <input type="radio" name="floors" value="1" onChange={onChangeHandler} checked={formData.floors === '1'} />
                  <label htmlFor="1">1</label>
                </div>
                <div>
                  <input type="radio" name="floors" value="2" onChange={onChangeHandler} checked={formData.floors === '2'} />
                  <label htmlFor="2">2</label>
                </div>
                <div>
                  <input type="radio" name="floors" value="3" onChange={onChangeHandler} checked={formData.floors === '3'} />
                  <label htmlFor="3">3</label>
                </div>
                <div>
                  <input type="radio" name="floors" value="4" onChange={onChangeHandler} checked={formData.floors === '4'} />
                  <label htmlFor="4">4</label>
                </div>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="sellform-group">
              <label htmlFor="bedrooms" className="sellform-label">Bedrooms</label>
              <div>
              <div>
                  <input type="radio" name="bedrooms" value="1" onChange={onChangeHandler} checked={formData.bedrooms === '1'} />
                  <label htmlFor="1">1</label>
                </div>
                <div>
                  <input type="radio" name="bedrooms" value="2" onChange={onChangeHandler} checked={formData.bedrooms === '2'} />
                  <label htmlFor="2">2</label>
                </div>
                <div>
                  <input type="radio" name="bedrooms" value="3" onChange={onChangeHandler} checked={formData.bedrooms === '3'} />
                  <label htmlFor="3">3</label>
                </div>
                <div>
                  <input type="radio" name="bedrooms" value="4" onChange={onChangeHandler} checked={formData.bedrooms === '4'} />
                  <label htmlFor="4">4</label>
                </div>
              </div>
            </div>


            {/* Bathrooms */}
            <div className="sellform-group">
              <label htmlFor="bathrooms" className="sellform-label">Bathrooms</label>
              <div>
              <div>
                  <input type="radio" name="bathrooms" value="1" onChange={onChangeHandler} checked={formData.bathrooms === '1'} />
                  <label htmlFor="1">1</label>
                </div>
                <div>
                  <input type="radio" name="bathrooms" value="2" onChange={onChangeHandler} checked={formData.bathrooms === '2'} />
                  <label htmlFor="2">2</label>
                </div>
                <div>
                  <input type="radio" name="bathrooms" value="3" onChange={onChangeHandler} checked={formData.bathrooms === '3'} />
                  <label htmlFor="3">3</label>
                </div>
                <div>
                  <input type="radio" name="bathrooms" value="4" onChange={onChangeHandler} checked={formData.bathrooms === '4'} />
                  <label htmlFor="4">4</label>
                </div>
              </div>
            </div>


            {/* Condition */}
            <div className="sellform-group">
              <label htmlFor="condition" className="sellform-label">Condition</label>
              <div>
              <div>
                  <input type="radio" name="condition" value="1" onChange={onChangeHandler} checked={formData.condition === '1'} />
                  <label htmlFor="1">Good</label>
                </div>
                <div>
                  <input type="radio" name="condition" value="0" onChange={onChangeHandler} checked={formData.condition === '0'} />
                  <label htmlFor="0">Bad</label>
                </div>
               
              </div>
            </div>




            {/* Amenities */}
            <div className="sellform-group">
              <label htmlFor="gender" className="sellform-label">Amenities</label>
              <div>
                <div>
                  <input type="checkbox" name="amenities" value="waterfront" onChange={onChangeHandler} checked={formData.amenities.indexOf('waterfront') !== -1} />
                  <label htmlFor="waterfront">Waterfront</label>
                </div>
                <div>
                  <input type="checkbox" name="amenities" value="view" onChange={onChangeHandler} checked={formData.amenities.indexOf('view') !== -1} />
                  <label htmlFor="view">View</label>
                </div>
             
              </div>
            </div>



            <div className="sellform-group">
              <button className="price-recom-btn" type="submit" >Get Recommended Price</button>
              <p></p>
              <button className="sell-btn" type="submit" >Submit and Request Visit from Company</button>
              <p></p>
            </div>
          </form>
         </div>
         
         )

}
  



export default SellHouseForm;
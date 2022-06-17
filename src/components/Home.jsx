import axios from 'axios'
import React from 'react'
import HealthList from './HealthList'

class Home extends React.Component
{

    constructor(props){
        super(props)
        this.state = {data: []}

        this.deleteHealth = this.deleteHealth.bind(this)
        this.healthTableList = this.healthTableList.bind(this)
    }

    componentDidMount(){
        axios.get("https://mern-health-data.herokuapp.com/health/")
            .then(res => {
                this.setState({data: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }


    deleteHealth(id){
        axios.delete("https://mern-health-data.herokuapp.com/health/"+id)
            .then(res => {
                console.log(res.data)
            })
            this.setState({
                data: this.state.data.filter(element => element._id !== id)
            })
    }

    healthTableList(){
            return this.state.data.map((each) => <HealthList health={each} deleteHealth={this.deleteHealth} key={each._id}/>)        
    }
    render(){
          return  <section class="bg-light p-2">
          <h3 class="pb-2">Health Data Table</h3>
          <div class="table-responsive" id="no-more-tables">
              <table class="table bg-white">
                  <thead class="bg-dark text-light">
                      <tr>
                          <th>Time</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Temperature</th>
                          <th>Phone Number</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.healthTableList()}
                  </tbody>
              </table>
          </div>
      </section>
    }
}

export default Home
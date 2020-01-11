import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };
	
    componentDidMount() {
		
		const stage = process.env.REACT_APP_QUOTES_API_STAGE;
		const host = process.env.REACT_APP_QUOTES_API_HOST;
		//console.log(host+'/'+stage);
		fetch(`https://${host}/${stage}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;

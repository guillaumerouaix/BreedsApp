import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addBreed } from '../actions'

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Breeds = ({ dispatch, AllBreeds }) => {

    const breedTest = {breed : 'breed1', breed : 'breed2', breed : 'breed3', breed : 'breed4', breed : 'breed5'}

    const [textFieldValue, setTextFieldValue] = useState("");

    const filterBreeds = (text) => {
        let breeds = breedTest
        if(text === ''){
            breeds = breedTest
        }
        else{
            breeds = breedTest.filter(item => item.toLowerCase().includes(text.toLowerCase()))
        }
        return breeds
      }
        
        return (
            <div className="App">
                    <p>
                        Welcome to our list of cats breeds  ! 
                    </p>

                    <label>
                        <TextField id="outlined-basic" label="Search" variant="outlined" style={{ width: "100%"}}
                            type="text"
                            placeholder="&nbsp;"
                            value={textFieldValue}
                            onChange={e => {
                                filterBreeds(e.currentTarget.value)
                                setTextFieldValue(e.currentTarget.value)
                            }}
                        />
                    </label>


                    <List component="nav" aria-label="secondary mailbox folders" style={{ width: "100%", textAlign: "center"}}>
                        {AllBreeds.map(breed => (
                            <ListItem button onClick={() => { dispatch(addBreed(breed.name))}} key={breed.id}>
                                <ListItemIcon>
                                </ListItemIcon>
                                {breed.name}
                            </ListItem>
                        ))}
                    </List>
            </div>
        );
}

const mapStateToProps = state => ({
    AllBreeds: state.AllBreeds
})

export default connect(
    mapStateToProps
)(Breeds);

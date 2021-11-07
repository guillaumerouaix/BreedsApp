import React from 'react';
import { connect } from 'react-redux'
import { removeBreed } from '../actions'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Favorites = ({ dispatch, FavoritesBreeds }) => {
  
    return(
      <div>
 <p>
                Favorites breeds  ! 
            </p>
            <List component="nav" aria-label="secondary mailbox folders" style={{ width: "100%", textAlign: "center"}}>
                {FavoritesBreeds.map(breed => (
                    <ListItem button key={breed.text} onClick={() => { dispatch(removeBreed(breed))}}>
                        <ListItemIcon>
                        </ListItemIcon>
                        {breed.text}
                    </ListItem>
                ))}
            </List>
      </div>
    )
  }
  
  const mapStateToProps = state => ({
    FavoritesBreeds: state.FavoritesBreeds
  })
  export default connect(
      mapStateToProps
    )(Favorites)
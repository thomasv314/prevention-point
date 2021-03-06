import React from "react"
import "../scss/participant-search.scss"
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core"

const ParticipantSearch = () => {
  return (
    <div className="participant-search">
      <Typography component="h5" variant="h5" gutterBottom>
        Participant Search
      </Typography>
      <form className="participant-search__form">
        <FormGroup className="participant-search__input">
          <FormControl>
            <InputLabel htmlFor="user_id">User ID</InputLabel>
            <Input id="user_id" name="user_id" value="" required />
          </FormControl>
        </FormGroup>
        <FormGroup className="participant-search__input">
          <FormControl>
            <InputLabel htmlFor="first_name">First Name</InputLabel>
            <Input id="first_name" name="first_name" value="" required />
          </FormControl>
        </FormGroup>
        <FormGroup className="participant-search__input">
          <FormControl>
            <InputLabel htmlFor="last_name">Last Name</InputLabel>
            <Input id="last_name" name="last_name" value="" required />
          </FormControl>
        </FormGroup>
        <Button type="submit" variant="contained" style={{ marginTop: 30 }}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ParticipantSearch

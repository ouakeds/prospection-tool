import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';

interface ICustomDialog {
  handleClose: () => void,
  open: boolean
}

const CustomDialog: React.FC<ICustomDialog> = ({handleClose, open}) => {
    return (  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nouveau Client</DialogTitle>

        <DialogContent sx={{p: 6, mt: 4}}>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField autoFocus margin="dense" id="company" label="Société" type="company" fullWidth variant="standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField autoFocus margin="dense" id="firstName" label="Prénom" type="firstName" fullWidth variant="standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField autoFocus margin="dense" id="lastName" label="Nom" type="lastName" fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth  variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <TextField autoFocus margin="dense" id="phone" label="Téléphone" type="phone" fullWidth  variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField autoFocus margin="dense" id="source" label="Source" type="source" fullWidth variant="standard" />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' sx={{m: 2}}>Annuler</Button>
          <Button onClick={handleClose} variant='outlined' sx={{m: 2}}>Sauvegarder</Button>
        </DialogActions>
      
      </Dialog>
  )
}


export default CustomDialog;
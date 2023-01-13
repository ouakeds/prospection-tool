import { Typography, Card, Button } from '@mui/material';
import CustomizedTables from '../../components/Table';
import DefaultLayout from '../../layouts/DefaultLayout';
import CustomDialog from './CustomerDialog';
import { useState } from 'react';
import Customer from '../../types/customer.interface';

const rows: Customer[] = [
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
  {email: 'test', company: 'test', phone: '06.10.10.10.10', source: 'Linkedin', id: 1, firstName: 'John', lastName: 'Doe', times: 0, status: 'terminé' },
]

interface ICol {
  key: keyof Customer,
  label: string
}

const columns: ICol[] = [
  {key: 'company', label: 'Société'},
  {key: 'firstName', label: 'Prénom'},
  {key: 'lastName', label: 'Nom'},
  {key: 'email', label: 'Email'},
  {key: 'phone', label: 'Téléphone'},
  {key: 'source', label: 'Canal'},
  {key: 'times', label: 'Relance'},
  {key: 'status', label: 'Status'},

]

const CustomerPage: React.FC = () => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <DefaultLayout>
            <>
                <CustomDialog open={open} handleClose={handleClose}/>

                <Card sx={{display: 'flex', mb: 2, p: 2, justifyItems: 'center'}}>
                    <Typography
                        sx={{ flex: '1 1 100%', margin: 2 }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        Liste des clients
                    </Typography>
                    <Button variant='outlined' sx={{alignSelf: 'flex-end', width: '300px', verticalAlign: 'center'}} onClick={handleClickOpen}>
                        + Nouveau client
                    </Button>
                </Card>

                <CustomizedTables<Customer> rows={rows} columns={columns} title='Liste des clients'/>
            </>
        </DefaultLayout> 
    )
}

export default CustomerPage;
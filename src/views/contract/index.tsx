import { Typography, Card, Button } from '@mui/material';
import CustomizedTables from '../../components/Table';
import DefaultLayout from '../../layouts/DefaultLayout';
import CustomDialog from './CustomerDialog';
import { useState } from 'react';
import Contract from '../../types/contract.interface';


const rows: Contract[] = [
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe', project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
  { company: 'test', firstName: 'John', lastName: 'Doe',  project: 'Apple', startDate: "01/01/2023", git: 'https://github.fr', status: 'En cours' },
]

interface ICol {
  key: keyof Contract,
  label: string
}

const columns: ICol[] = [
  {key: 'company', label: 'Société'},
  {key: 'firstName', label: 'Prénom'},
  {key: 'lastName', label: 'Nom'},
  {key: 'project', label: 'Projet'},
  {key: 'startDate', label: 'Date de début'},
  {key: 'endDate', label: 'Date de fin'},
  {key: 'git', label: 'Git'},
  {key: 'status', label: 'Statut'},


]

const ContractPage: React.FC = () => {

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
                        Liste des contrats
                    </Typography>
                    <Button variant='outlined' sx={{alignSelf: 'flex-end', width: '300px', verticalAlign: 'center'}} onClick={handleClickOpen}>
                        + Nouveau contrat
                    </Button>
                </Card>

                <CustomizedTables<Contract> rows={rows} columns={columns} title='Liste des clients'/>
            </>
        </DefaultLayout> 
    )
}

export default ContractPage;
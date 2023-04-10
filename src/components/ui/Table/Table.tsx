// material-ui
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material'

// third-party
import { format } from 'date-fns'

// project imports
import { getInitials } from '@src/utils/getInitials'

// types
type CustomersTableProps = {
    count?: number
    items?: any[]
    onDeselectAll?: () => void
    onDeselectOne?: (id: number) => void
    onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void
    onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onSelectAll?: () => void
    onSelectOne?: (id: number) => void
    page?: number
    rowsPerPage?: number
    selected?: number[]
}

// ==============================|| TABLE ||============================== //

const CustomersTable = (props: CustomersTableProps) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => {},
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = []
    } = props

    const selectedSome = selected.length > 0 && selected.length < items.length
    const selectedAll = items.length > 0 && selected.length === items.length

    return (
        <Card>
            <Box sx={{ minWidth: 800 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedAll}
                                    indeterminate={selectedSome}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            onSelectAll?.()
                                        } else {
                                            onDeselectAll?.()
                                        }
                                    }}
                                />
                            </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Signed Up</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((customer) => {
                            const isSelected = selected.includes(customer.id)
                            const createdAt = format(customer.createdAt, 'dd/MM/yyyy')

                            return (
                                <TableRow hover key={customer.id} selected={isSelected}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isSelected}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    onSelectOne?.(customer.id)
                                                } else {
                                                    onDeselectOne?.(customer.id)
                                                }
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Stack alignItems="center" direction="row" spacing={2}>
                                            <Avatar src={customer.avatar}>{getInitials(customer.name)}</Avatar>
                                            <Typography variant="subtitle2">{customer.name}</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>
                                        {customer.address.city}, {customer.address.state}, {customer.address.country}
                                    </TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{createdAt}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Box>

            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}


export default CustomersTable

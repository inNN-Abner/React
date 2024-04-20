import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

interface Props {
    children: React.ReactNode
}

function Layout (props: Props) {
    const {children} = props
    return (
    <Grid className='grid' templateColumns='1fr' templateRows='64px auto 64px'>
        <GridItem>
            <Navbar />
        </GridItem>

        
        <GridItem>
            {children}
        </GridItem>

        
        <GridItem>
            <Footer />
        </GridItem>
    </Grid>
    )
}

export default Layout
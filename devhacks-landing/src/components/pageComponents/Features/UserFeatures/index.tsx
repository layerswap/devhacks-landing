import CustomerSupport from "./CustomerSupport"
import RefuelGas from "./RefuelGas"
import WalletInfrastructure from "./WalletInfrastructure"

const UserFeatures = () => {
    return (
        <div className='space-y-4 max-w-6xl px-6 lg:px-8 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <WalletInfrastructure />
                <CustomerSupport />
            </div>
            <RefuelGas />
        </div>
    )
}

export default UserFeatures
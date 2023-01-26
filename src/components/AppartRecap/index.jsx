import { AppartList } from "../../Datas/AppartList"
import AppartCard from "../Card"
import '../../utils/style/AppartRecap.css'
import '../../utils/style/Card.css'


function AppartRecap() {
	
	return (
		<div>
			<div className='appart-list'>
				{AppartList.map(({ id, title, cover }) => (
					<AppartCard
						id={id}
						title={title}
						cover= {cover}
					/>
				))}
			</div>
		</div>
	)
}

export default AppartRecap
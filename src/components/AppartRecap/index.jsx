import { AppartList } from "../../Datas/AppartList"
import AppartCard from "../Card"
import styled from 'styled-components';


const WrapperCard = styled.div `
display: flex;
flex-wrap: wrap;
margin: 50px 50px; 
justify-content: center;
`





function AppartRecap() {
	
	return (
		<div>
			<WrapperCard >
				{AppartList.map(({ id, title, cover }) => (
					<AppartCard
						id={id}
						title={title}
						cover= {cover}
					/>
				))}
			</WrapperCard>
		</div>
	)
}

export default AppartRecap
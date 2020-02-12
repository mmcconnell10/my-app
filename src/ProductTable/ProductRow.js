import React from 'react';


class ProductRow extends React.Component{
	render(){
		//product has a name, price, category, and stocked bool
		const product = this.props.product;
		//check to see if product is in stock. if it isn't make it red
		const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

		return(
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

export default ProductRow;
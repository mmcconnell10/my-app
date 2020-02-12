import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component{

	render(){
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

		const rows = [];
    	let lastCategory = null;

    	//Goes through each product and adds a new category when it changes and adds product rows under it
    	this.props.products.forEach((product) => {
        if(product.name.indexOf(filterText) === -1){
          return;
        }
        if(!product.stocked && inStockOnly){
          return;
        }
        
    		if (product.category !== lastCategory) {
      		rows.push(
        			<ProductCategoryRow category={product.category} key={product.category} />
      		);
    		}
    		rows.push(
      		<ProductRow product={product} key={product.name} />
    		);
    		lastCategory = product.category;
    	});
    	
    	return (
	      <table>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Price</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </table>
    	);
	}
}

export default ProductTable;






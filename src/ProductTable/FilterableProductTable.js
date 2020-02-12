import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Card from '../Card';

class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false,
		}

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    	this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(filterText){
		this.setState({filterText: filterText});
	}
	handleInStockChange(inStockOnly){
		this.setState({inStockOnly: inStockOnly});
	}

  render() {
  	let header = <SearchBar 
				  	filterText={this.state.filterText} 
				  	inStockOnly={this.state.inStockOnly}
				  	onFilterTextChange={this.handleFilterTextChange}
				  	onInStockOnlyChange={this.handleInStockChange}
  				/>;
    let body = <ProductTable 
				    products={this.props.products} 
				    filterText={this.state.filterText} 
				    inStockOnly={this.state.inStockOnly}
    			/>
    return (
      <Card header={header} body={body} footer=''/>
    );
  }
}

export default FilterableProductTable;
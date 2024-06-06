import { FlatList, View, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import {repositoryStyles} from './repositoryStyles';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = repositoryStyles

const ItemSeparator = () => <View style={styles.separator} />;

const SortingHeader = ({ sortOrder, setSortOrder }) => {
  return (
    <Picker 
      selectedValue={sortOrder} 
      onValueChange={(itemValue) => setSortOrder(itemValue)} 
    >
      <Picker.Item label='Select an item...' value='' style={styles.selectMessageColor}/>
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highestRated' />
      <Picker.Item label='Lowest rated repositories' value='lowestRated' />
    </Picker>
  )
}

export const RepositoryListContainer = ({ repositories, sortOrder, setSortOrder }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
  return (
    <>
      <FlatList
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        renderItem={({item}) => (
          <Pressable onPress={()=> navigate(`/${item.id}`)}>
            <RepositoryItem item={item}/>
          </Pressable>
        )}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={
          <>
            <SortingHeader sortOrder={sortOrder} setSortOrder={setSortOrder}/>
          </>
        }
      />
    </>
  );
};

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState('latest')
  const [sortDirection, setSortDirection] = useState('DESC')
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debounceSearchKeyword] = useDebounce(searchKeyword, 500);

  switch(sortOrder) {
    case 'latest': 
      setSortOrder('CREATED_AT')
      setSortDirection('DESC')
      break;

    case 'highestRated': 
      setSortOrder('RATING_AVERAGE')
      setSortDirection('DESC')
      break;

    case 'lowestRated': 
      setSortOrder('RATING_AVERAGE')
      setSortDirection('ASC')
      break;
  }

  const {repositories} = useRepositories(sortOrder, sortDirection, debounceSearchKeyword);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchKeyword}
        value={searchKeyword}
      />
      <RepositoryListContainer 
        repositories={repositories}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </>
  )
};

export default RepositoryList;
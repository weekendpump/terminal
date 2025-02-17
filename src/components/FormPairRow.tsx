import { TokenInfo } from '@solana/spl-token-registry';
import React, { CSSProperties } from 'react';
import { WRAPPED_SOL_MINT } from 'src/constants';

import CoinBalance from './Coinbalance';
import { PAIR_ROW_HEIGHT } from './FormPairSelector';
import TokenIcon from './TokenIcon';

const FormPairRow: React.FC<{
  item: TokenInfo;
  style: CSSProperties;
  onSubmit(item: TokenInfo): void;
}> = ({ item, style, onSubmit }) => {
  return (
    <li
      className={`cursor-pointer list-none `}
      style={{ maxHeight: PAIR_ROW_HEIGHT, height: PAIR_ROW_HEIGHT, ...style }}
      translate="no"
    >
      <div
        className="flex items-center rounded-xl space-x-4 my-2 p-4 bg-[#2C2D33] hover:bg-black/10"
        onClick={() => onSubmit(item)}
      >
        <div className="flex-shrink-0">
          <div className="h-6 w-6 rounded-full">
            <TokenIcon tokenInfo={item} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white truncate">{item.symbol}</p>
          <p className="text-xs text-gray-500 truncate">
            <CoinBalance mintAddress={item.address} hideZeroBalance /> {item.symbol}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FormPairRow;

// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

/*
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

pragma solidity ^0.8.0;

// CAUTION
// This version of SafeMath should only be used with Solidity 0.8 or later,
// because it relies on the compiler's built in overflow checks.

/**
 * @dev Wrappers over Solidity's arithmetic operations.
 *
 * NOTE: `SafeMath` is no longer needed starting with Solidity 0.8. The compiler
 * now has built in overflow checking.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the substraction of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting with custom message when dividing by zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryMod}.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}



pragma solidity ^0.8.0;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        uint256 size;
        // solhint-disable-next-line no-inline-assembly
        assembly { size := extcodesize(account) }
        return size > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{ value: amount }("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain`call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
      return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        require(isContract(target), "Address: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.call{ value: value }(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data, string memory errorMessage) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.staticcall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.delegatecall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    function _verifyCallResult(bool success, bytes memory returndata, string memory errorMessage) private pure returns(bytes memory) {
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                // solhint-disable-next-line no-inline-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}

/**
 * @dev Contract module which allows children to implement an emergency stop
 * mechanism that can be triggered by an authorized account.
 *
 * This module is used through inheritance. It will make available the
 * modifiers `whenNotPaused` and `whenPaused`, which can be applied to
 * the functions of your contract. Note that they will not be pausable by
 * simply including this module, only once the modifiers are put in place.
 */
abstract contract Pausable is Context {
    /**
     * @dev Emitted when the pause is triggered by `account`.
     */
    event Paused(address account);

    /**
     * @dev Emitted when the pause is lifted by `account`.
     */
    event Unpaused(address account);

    bool private _paused;

    /**
     * @dev Initializes the contract in unpaused state.
     */
    constructor () {
        _paused = false;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function paused() public view virtual returns (bool) {
        return _paused;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    modifier whenNotPaused() {
        require(!paused(), "Pausable: paused");
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    modifier whenPaused() {
        require(paused(), "Pausable: not paused");
        _;
    }

    /**
     * @dev Triggers stopped state.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(_msgSender());
    }

    /**
     * @dev Returns to normal state.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(_msgSender());
    }
}

/**
 * @dev Interface of the ERC165 standard, as defined in the
 * https://eips.ethereum.org/EIPS/eip-165[EIP].
 *
 * Implementers can declare support of contract interfaces, which can then be
 * queried by others ({ERC165Checker}).
 *
 * For an implementation, see {ERC165}.
 */
interface IERC165 {
    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface IERC721 is IERC165 {
    
    
    /**
     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner);
    
    function createrOf(uint256 tokenId) external view returns (address);

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must exist and be owned by `from`.
     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Transfers `tokenId` token from `from` to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must be owned by `from`.
     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Gives permission to `to` to transfer `tokenId` token to another account.
     * The approval is cleared when the token is transferred.
     *
     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
     *
     * Requirements:
     *
     * - The caller must own the token or be an approved operator.
     * - `tokenId` must exist.
     *
     * Emits an {Approval} event.
     */
    function approve(address to, uint256 tokenId) external;

    /**
     * @dev Returns the account approved for `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function getApproved(uint256 tokenId) external view returns (address operator);

    /**
     * @dev Approve or remove `operator` as an operator for the caller.
     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
     *
     * Requirements:
     *
     * - The `operator` cannot be the caller.
     *
     * Emits an {ApprovalForAll} event.
     */
    function setApprovalForAll(address operator, bool _approved) external;

    /**
     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.
     *
     * See {setApprovalForAll}
     */
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    /**
      * @dev Safely transfers `tokenId` token from `from` to `to`.
      *
      * Requirements:
      *
      * - `from` cannot be the zero address.
      * - `to` cannot be the zero address.
      * - `tokenId` token must exist and be owned by `from`.
      * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
      * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
      *
      * Emits a {Transfer} event.
      */
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
}

contract Marketplace is Ownable, Pausable {

    using Address for address;
    using SafeMath for uint256;

    IERC20 public acceptedToken;

    struct Order {
        bytes32 id;
        address seller;
        address nftAddress;
        uint256 price;
        uint256 startAt;
        uint256 expiresAt;
        Status status;
    }

    struct Bid {
        bytes32 id;
        address bidder;
        uint256 price;
        uint256 startAt;
        uint256 expiresAt;
    }

    struct Offer {
        bytes32 id;
        address maker;
        uint256 price;
        uint256 expiresAt;
    }

    enum Status {
        Pending,
        FixedPrice,
        Auction
    }

    // From ERC721 registry assetId to Order (to avoid asset collision)
    mapping(address => mapping(uint256 => Order)) public orderByAssetId;

    // From ERC721 registry assetId to Bid (to avoid asset collision)
    mapping(address => mapping(uint256 => Bid)) public bidByOrderId;

    // From ERC721 registry assetId to Order (to avoid asset collision)
    mapping(address => mapping(uint256 =>Offer[])) public offerByAssetId;

    // royalty
    uint256 royalty = 1000; // 10%

    event OrderCreated(
            bytes32 orderId,
            address assetOwner,
            address nftAddress,
            uint256 assetId,
            uint256 priceInWei,
            uint256 startAt,
            uint256 expiresAt,
            Status status
        );

    event OrderCancelled(bytes32 orderId);
    event OrderUpdated(bytes32 orderId, uint256 priceInWei);
    event OrderSuccessful(bytes32 orderId, address buyer, uint256 priceInWei);
    event Buycreate(
            address nftAddress,
            uint256 assetId,
            address seller,
            address buyer,
            uint256 priceInWei
        );
    event BidCreated(
            bytes32 bidId,
            address nftAddress,
            uint256 assetId,
            address bidder,
            uint256 priceInWei,
            uint256 startAt,
            uint256 expiresAt
        );

    event BidAccepted(bytes32 bidId);
    event BidCancelled(bytes32 bidId);

    event OfferCreated(
            bytes32 offerId,
            address nftAddress,
            uint256 assetId,
            address maker,
            uint256 priceInWei,
            uint256 expiresAt
        );
    event OfferAccepted(bytes32 offerId);
    event OfferCancelled(address nftAddress, uint256 assetId, address maker);

    /**
     * @dev Initialize this contract. Acts as a constructor
     */
    constructor() Ownable() {
        acceptedToken = IERC20(0xf1277d1Ed8AD466beddF92ef448A132661956621); //WFTM in testnet
//      acceptedToken = IERC20(0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83); //WFTM in mainnet
    }

    /**
     * @dev Sets the paused failsafe. Can only be called by owner
     * @param _setPaused - paused state
     */
    function setPaused(bool _setPaused) public onlyOwner {
        return (_setPaused) ? _pause() : _unpause();
    }

    /**
     * @dev Sets the royalty fee. Can only be called by owner
     * @param _royalty - royalty fee value
     */
    function setRoyalty (uint256 _royalty) public onlyOwner {
       require(_royalty < 10000, "Wrong value");
       royalty = _royalty;
    }

    /**
     * @dev Creates a new order
     * @param _nftAddress - Non fungible registry address
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Price in Wei for the supported coin
     * @param _startAt - start time of the order (in hours)
     * @param _expiresAt - Duration of the order (in hours)
     */
    function createOrder(
        address _nftAddress, uint256 _assetId, uint256 _priceInWei, 
        uint256 _startAt, uint256 _expiresAt, Status _status) public whenNotPaused {
        // Check nft registry
        IERC721 nftRegistry = _requireERC721(_nftAddress);

        // Check order creator is the asset owner
        address assetOwner = nftRegistry.ownerOf(_assetId);

        require(assetOwner == msg.sender, "Marketplace: Only the asset owner can create orders");
        require(_priceInWei > 0, "Marketplace: Price should be bigger than 0");
        require(_expiresAt > block.timestamp.add(5 minutes),
            "Marketplace: Publication should be more than 1 minute in the future"
        );
        require(_status != Status.Pending, "Order can not be created.");

        // get NFT asset from seller
        nftRegistry.transferFrom(assetOwner, address(this), _assetId);

        // create the orderId
        bytes32 orderId = keccak256(
            abi.encodePacked(
                block.timestamp,
                assetOwner,
                _nftAddress,
                _assetId,
                _priceInWei
            )
        );

        // save order
        orderByAssetId[_nftAddress][_assetId] = Order({
            id: orderId,
            seller: assetOwner,
            nftAddress: _nftAddress,
            price: _priceInWei,
            startAt: _startAt,
            expiresAt: _expiresAt,
            status: _status
        });

        emit OrderCreated(
            orderId,
            assetOwner,
            _nftAddress,
            _assetId,
            _priceInWei,
            _startAt,
            _expiresAt,
            _status
        );
    }

    /**
     * @dev Cancel an already published order
     *  can only be canceled by seller or the contract owner
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function cancelOrder(address _nftAddress, uint256 _assetId) public whenNotPaused {
        Order memory order = orderByAssetId[_nftAddress][_assetId];

        require(order.seller == msg.sender || msg.sender == owner(), "Marketplace: unauthorized sender");

        // Remove pending bid if any
        Bid memory bid = bidByOrderId[_nftAddress][_assetId];

        if (bid.id != 0) {
            _cancelBid(
                bid.id,
                _nftAddress,
                _assetId,
                bid.bidder,
                bid.price
            );
        }

        /// send asset back to seller
        IERC721(_nftAddress).transferFrom(address(this), msg.sender, _assetId);
        delete orderByAssetId[_nftAddress][_assetId];

        emit OrderCancelled(order.id);
    }

    /**
     * @dev Update an already published order
     *  can only be updated by seller
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function updateOrder(address _nftAddress, uint256 _assetId, uint256 _priceInWei) public whenNotPaused {
        Order memory order = orderByAssetId[_nftAddress][_assetId];

        // Check valid order to update
        require(order.id != 0, "Marketplace: asset not published");
        require(order.seller == msg.sender, "Marketplace: sender not allowed");

        // check order updated params
        require(_priceInWei > 0 && _priceInWei < order.price , 
            "Marketplace: Price should be bigger than 0 and smaller than current price");

        order.price = _priceInWei;

        emit OrderUpdated(order.id, _priceInWei);
    }

    /**
     * @dev Executes the sale for a published NFT and checks for the asset fingerprint
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function safeExecuteOrder(address _nftAddress, uint256 _assetId) public payable whenNotPaused {
        // Get the current valid order for the asset or fail
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        /// Check the execution price matches the order price
        require(order.price == msg.value, "Marketplace: invalid price");
        require(order.seller != msg.sender, "Marketplace: unauthorized sender");
        require(order.buyer == msg.sender, "Marketplace: unauthorized sender");

        // market fee to cut
        uint256 _priceInWei = msg.value;

        // Remove pending bid if any
        Bid memory bid = bidByOrderId[_nftAddress][_assetId];

        if (bid.id != 0) {
            _cancelBid(
                bid.id,
                _nftAddress,
                _assetId,
                bid.bidder,
                bid.price
            );
        }

        _executeOrder(
            order.id,
            order.seller,
            msg.sender, // buyer
            _nftAddress,
            _assetId,
            _priceInWei
        );
    }

    /**
     * @dev Buy the sale for a published NFT and checks for the asset fingerprint
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function Buy(address _nftAddress, uint256 _assetId) public payable whenNotPaused {
        // Checks order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        require(order.status == Status.FixedPrice, "Unauthorized");
        require(msg.value == order.price, "Marketplace : price is not right");
        require(block.timestamp > order.startAt && block.timestamp < order.expiresAt, 
            "Marketplace : You can not buy now");

        _executeOrder(
            order.id,
            order.seller,
            msg.sender,
            _nftAddress,
            _assetId,
            msg.value
        );
    }

    /**
     * @dev Places a bid for a published NFT and checks for the asset fingerprint
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function PlaceBid(address _nftAddress, uint256 _assetId) public payable whenNotPaused
    {
        // Checks order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        require(order.status == Status.Auction, "Unauthorized");
        require(block.timestamp > order.startAt && block.timestamp < order.expiresAt, 
            "Marketplace : You can not bid now");

        // Check price if theres previous a bid
        Bid memory bid = bidByOrderId[_nftAddress][_assetId];

        // if theres no previous bid, just check price > 0
        uint256 _priceInWei = msg.value;
        if (bid.id != 0) {
            if (bid.expiresAt >= block.timestamp) {
                require(msg.value > bid.price, "Marketplace: bid price should be higher than last bid");
            } 
            else {
                require(_priceInWei > 0, "Marketplace: bid should be > 0");
            }

            _cancelBid(
                bid.id,
                _nftAddress,
                _assetId,
                bid.bidder,
                bid.price
            );
        } 
        else {
            require(_priceInWei > 0, "Marketplace: bid should be > 0");
        }

        // Create bid
        bytes32 bidId = keccak256(
            abi.encodePacked(
                block.timestamp,
                msg.sender,
                order.id,
                _priceInWei,
                order.expiresAt
            )
        );

        if (order.exiresAt.sub(block.timestamp) < 10 minutes) {
            order.exiresAt = order.exiresAt.add(10 minutes);
        }

        // Save Bid for this order
        bidByOrderId[_nftAddress][_assetId] = Bid({
            id: bidId,
            bidder: msg.sender,
            price: _priceInWei,
            startAt: order.startAt,
            expiresAt: order.expiresAt.add(7 days)
        });

        emit BidCreated(
            bidId,
            _nftAddress,
            _assetId,
            msg.sender, // bidder
            _priceInWei,
            order.startAt,
            order.expiresAt.add(7 days)
        );
    }


    /**
     * @dev Cancel an already published bid
     *  can only be canceled by seller or the contract owner
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function cancelBid(address _nftAddress, uint256 _assetId) public whenNotPaused {
        Bid memory bid = bidByOrderId[_nftAddress][_assetId];

        require(bid.bidder == msg.sender || msg.sender == owner(), "Marketplace: Unauthorized sender");
        require(block.timestamp > bid.startAt && block.timestamp < bid.expiresAt, 
            "Marketplace : You can not cancel bid");

        _cancelBid(
            bid.id,
            _nftAddress,
            _assetId,
            bid.bidder,
            bid.price
        );
    }

    /**
     * @dev Executes the sale for a published NFT by accepting a current bid, called by the owner of token
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Bid price
     */
    function acceptBid(address _nftAddress, uint256 _assetId) public whenNotPaused {
        // check order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        // item seller is the only allowed to accept a bid
        require(order.seller == msg.sender, "Marketplace: unauthorized sender");

        Bid memory bid = bidByOrderId[_nftAddress][_assetId];

        require(bid.price == _priceInWei, "Marketplace: invalid bid price");

        // remove bid
        delete bidByOrderId[_nftAddress][_assetId];

        emit BidAccepted(bid.id);

        _executeOrder(
            order.id,
            order.seller,
            bid.bidder,
            _nftAddress,
            _assetId,
            _priceInWei
        );
    }

    /**
     * @dev Make a offer for a published NFT and checks for the asset fingerprint
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Offer price
     * @param _expiresAt - Offer expiration time
     */
    function makeOffer(address _nftAddress, uint256 _assetId, 
                        uint256 _priceInWei, uint256 _expiresAt) public whenNotPaused {
        // Checks order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        require(order.status == Status.pending || order.status == Status.FixedPrice || 
                (order.status == Status.Auction && block.timestamp > order.expiresAt), "Unauthorized");

        // check on expire time
        if (_expiresAt > order.expiresAt) {
            _expiresAt = order.expiresAt;
        }

        // Create offer
        bytes32 offerId = keccak256(
            abi.encodePacked(
                block.timestamp,
                msg.sender,
                order.id,
                _priceInWei,
                _expiresAt
            )
        );

        Offer memory _offer = Offer({
            id: offerId,
            maker: msg.sender,
            price: _priceInWei,
            expiresAt: _expiresAt,
            active: true
        });

        offerByAssetId[_nftAddress][_assetId].push(_offer);

        emit OfferCreated(
            offerId,
            _nftAddress,
            _assetId,
            msg.sender,
            _priceInWei,
            _expiresAt
        );
    }

    /**
     * @dev Executes the sale for a published NFT by accepting a current bid, called by the owner of token
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _maker - Address of the offer maker
     */
    function acceptOffer(address _nftAddress, uint256 _assetId, uint index) public whenNotPaused {
        // check order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        // item seller is the only allowed to accept a bid
        require(order.seller == msg.sender, "Marketplace: unauthorized sender");
        require(index < offerIndexByMaker[_nftAddress][_assetId].length, "Marketplace: Wrong index")

        Offer memory _offer = offerIndexByMaker[_nftAddress][_assetId][index];

        require(block.timestamp < _offer.expiresAt, "Marketplace : Marketplace: offer expired");

        order.buyer = offer.maker;
        order.price = offer.price;

        emit OfferAccepted(offer.id);

        uint256 _priceInWei = order.price;

        //royalty
        uint256 royaltyShareAmount= _priceInWei.mul(royalty).div(1e4);

        acceptedToken.transferFrom(order.buyer, IERC721(_nftAddress).createrOf(_assetId)), proyaltyShareAmount);
        acceptedToken.transferFrom(order.buyer, order.seller, priceInWei.sub(royaltyShareAmount));

        // remove order
        delete orderByAssetId[_nftAddress][_assetId];

        // Transfer NFT asset
        IERC721(_nftAddress).transfer(_buyer, _assetId);

        // Notify ..
        emit OrderSuccessful(order.id, _buyer, _priceInWei);
    }

    /**
     * @dev Cancel an already made offer
     *  can only be removed by maker
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function cancelOffer(address _nftAddress, uint256 _assetId, uint index) public whenNotPaused {
        Order memory order = _getValidOrder(_nftAddress, _assetId);

        require(index < offerIndexByMaker[_nftAddress][_assetId].length, "Marketplace: Wrong index")

        Offer memory _offer = offerIndexByMaker[_nftAddress][_assetId][index];

        require(offer.expiresAt >= block.timestamp, "Marketplace: offer expired");
        require(offer.maker == msg.sender, "Marketplace: unauthorized offer maker");

        delete offerIndexByMaker[_nftAddress][_assetId][index];

        emit OfferCancelled(_nftAddress, _assetId, msg.sender);
    }

    /**
     * @dev Executes the sale for a published NFT
     * @param _orderId - Order Id to execute
     * @param _buyer - address
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - NFT id
     * @param _priceInWei - Order price
     */
    function _executeOrder(
        bytes32 _orderId,
        address _orderSeller,
        address _buyer,
        address _nftAddress,
        uint256 _assetId,
        uint256 _priceInWei
    )
        internal
    {
        Order memory order = orderByAssetId[_nftAddress][_assetId];

        //royalty
        uint256 royaltyShareAmount= _priceInWei.mul(royalty).div(1e4);

        require(payable(IERC721(_nftAddress).createrOf(_assetId)).send(royaltyShareAmount));
        require(payable(_orderSeller).send(_priceInWei.sub(royaltyShareAmount)));

        // remove order
        delete orderByAssetId[_nftAddress][_assetId];

        // Transfer NFT asset
        IERC721(_nftAddress).transferFrom(
            address(this),
            _buyer,
            _assetId
        );

        order.buyer = _buyer;

        // Notify ..
        emit OrderSuccessful(
            _orderId,
            _buyer,
            _priceInWei
        );
    }

    /**
     * @dev Internal function gets Order by nftRegistry and assetId. Checks for the order validity
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function _getValidOrder(address _nftAddress, uint256 _assetId) internal view returns (Order memory order) {
        order = orderByAssetId[_nftAddress][_assetId];

        require(order.id != 0, "Marketplace: asset not published");
        require(order.expiresAt >= block.timestamp, "Marketplace: order expired");
        require(order.status == Status.FixedPrice ||  order.status == Status.Auction, "Marketplace: order not possible");
    }

    /**
     * @dev Cancel bid from an already published order
     *  can only be canceled by seller or the contract owner
     * @param _bidId - Bid identifier
     * @param _nftAddress - registry address
     * @param _assetId - ID of the published NFT
     * @param _bidder - Address
     * @param _escrowAmount - in acceptenToken currency
     */
    function _cancelBid(
        bytes32 _bidId,
        address _nftAddress,
        uint256 _assetId,
        address _bidder,
        uint256 _escrowAmount
    )
        internal
    {
        delete bidByOrderId[_nftAddress][_assetId];

        // return escrow to canceled bidder
        require(payable(_bidder).send(_escrowAmount));

        emit BidCancelled(_bidId);
    }

    function _requireERC721(address _nftAddress) internal view returns (IERC721) {
        require(_nftAddress.isContract(), "The NFT Address should be a contract");
        // require(
        //     IERC721(_nftAddress).supportsInterface(_INTERFACE_ID_ERC721),
        //     "The NFT contract has an invalid ERC721 implementation"
        // );
        return IERC721(_nftAddress);
    }

    function getOrderByAssetIds (address _nftAddress,uint256[] memory _assetIds) external view returns(Order[] memory orders){
        orders = new Order[](_assetIds.length);
        for(uint256 i = 0; i < _assetIds.length; i++){
            orders[i] = orderByAssetId[_nftAddress][_assetIds[i]];
        }
    }

    function getBidByAssetIds (address _nftAddress,uint256[] memory _assetIds) external view returns(Bid[] memory bids){
        bids = new Bid[](_assetIds.length);
        for(uint256 i = 0; i < _assetIds.length; i++){
            bids[i] = bidByOrderId[_nftAddress][_assetIds[i]];
        }
    }
}